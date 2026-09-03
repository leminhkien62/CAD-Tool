# PowerShell script để deploy CAD Viewer lên IIS
# Chạy script này với quyền Administrator

param(
    [string]$SiteName = "CAD-Viewer",
    [int]$Port = 8080,
    [string]$Viewer = "full",  # "full" hoặc "simple"
    [string]$HostName = ""
)

# Màu sắc cho output
function Write-Success { param($Message) Write-Host $Message -ForegroundColor Green }
function Write-Info { param($Message) Write-Host $Message -ForegroundColor Cyan }
function Write-Warning { param($Message) Write-Host $Message -ForegroundColor Yellow }
function Write-Error { param($Message) Write-Host $Message -ForegroundColor Red }

Write-Info "=========================================="
Write-Info "CAD Viewer IIS Deployment Script"
Write-Info "=========================================="
Write-Info ""

# Kiểm tra quyền Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Error "Script này cần chạy với quyền Administrator!"
    Write-Warning "Chuột phải vào PowerShell và chọn 'Run as Administrator'"
    exit 1
}

# Import IIS Module
Import-Module WebAdministration -ErrorAction SilentlyContinue
if (-not $?) {
    Write-Error "Không thể load IIS Module. Đảm bảo IIS đã được cài đặt."
    exit 1
}

# Xác định thư mục source
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if ($Viewer -eq "simple") {
    $SourcePath = Join-Path $ScriptDir "packages\cad-simple-viewer-example\dist"
} else {
    $SourcePath = Join-Path $ScriptDir "packages\cad-viewer-example\dist"
}

Write-Info "Viewer type: $Viewer"
Write-Info "Source path: $SourcePath"

# Kiểm tra thư mục dist có tồn tại không
if (-not (Test-Path $SourcePath)) {
    Write-Error "Thư mục build không tồn tại: $SourcePath"
    Write-Warning "Hãy chạy 'pnpm build' trước khi deploy"
    exit 1
}

# Kiểm tra web.config
$WebConfigPath = Join-Path $SourcePath "web.config"
if (-not (Test-Path $WebConfigPath)) {
    Write-Warning "Không tìm thấy web.config, đang tạo..."
    # Tạo web.config cơ bản nếu chưa có
    Copy-Item -Path (Join-Path $ScriptDir "web.config.template") -Destination $WebConfigPath -ErrorAction SilentlyContinue
}

# Kiểm tra xem site đã tồn tại chưa
$ExistingSite = Get-Website -Name $SiteName -ErrorAction SilentlyContinue

if ($ExistingSite) {
    Write-Warning "Website '$SiteName' đã tồn tại."
    $Response = Read-Host "Bạn có muốn cập nhật website này? (Y/N)"
    
    if ($Response -eq "Y" -or $Response -eq "y") {
        Write-Info "Đang dừng website..."
        Stop-Website -Name $SiteName -ErrorAction SilentlyContinue
        
        Write-Info "Đang cập nhật physical path..."
        Set-ItemProperty "IIS:\Sites\$SiteName" -Name physicalPath -Value $SourcePath
        
        Write-Info "Đang khởi động lại website..."
        Start-Website -Name $SiteName
        
        Write-Success "Website đã được cập nhật thành công!"
    } else {
        Write-Info "Hủy deploy."
        exit 0
    }
} else {
    # Tạo website mới
    Write-Info "Đang tạo website mới '$SiteName'..."
    
    # Kiểm tra port đã được sử dụng chưa
    $ExistingBinding = Get-WebBinding | Where-Object { $_.bindingInformation -like "*:$Port:*" }
    if ($ExistingBinding) {
        Write-Error "Port $Port đã được sử dụng bởi website khác."
        Write-Info "Các port đang được sử dụng:"
        Get-WebBinding | ForEach-Object { Write-Info "  - $($_.bindingInformation)" }
        exit 1
    }
    
    # Tạo website
    try {
        if ($HostName) {
            New-Website -Name $SiteName -PhysicalPath $SourcePath -Port $Port -HostHeader $HostName
        } else {
            New-Website -Name $SiteName -PhysicalPath $SourcePath -Port $Port
        }
        Write-Success "Website đã được tạo thành công!"
    } catch {
        Write-Error "Lỗi khi tạo website: $_"
        exit 1
    }
}

# Cấu hình Application Pool
$AppPoolName = $SiteName + "AppPool"
Write-Info "Đang cấu hình Application Pool '$AppPoolName'..."

if (Test-Path "IIS:\AppPools\$AppPoolName") {
    Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name managedRuntimeVersion -Value ""
    Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name enable32BitAppOnWin64 -Value $false
} else {
    New-WebAppPool -Name $AppPoolName
    Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name managedRuntimeVersion -Value ""
}

# Gán Application Pool cho website
Set-ItemProperty "IIS:\Sites\$SiteName" -Name applicationPool -Value $AppPoolName

Write-Info ""
Write-Success "=========================================="
Write-Success "Deploy hoàn tất!"
Write-Success "=========================================="
Write-Info ""
Write-Info "Thông tin website:"
Write-Info "  - Name: $SiteName"
Write-Info "  - Path: $SourcePath"
Write-Info "  - Port: $Port"
if ($HostName) {
    Write-Info "  - URL: http://$HostName`:$Port"
} else {
    Write-Info "  - URL: http://localhost:$Port"
}
Write-Info ""
Write-Info "Bạn có thể truy cập ứng dụng qua trình duyệt."
Write-Info ""
Write-Warning "Lưu ý:"
Write-Warning "  - Đảm bảo đã cài đặt URL Rewrite Module"
Write-Warning "  - Kiểm tra Firewall nếu không truy cập được từ máy khác"
Write-Info ""
