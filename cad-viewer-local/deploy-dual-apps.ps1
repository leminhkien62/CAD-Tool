# PowerShell script để deploy cả 2 ứng dụng (CAD Viewer + STEP File Reader) lên IIS
# Chạy script này với quyền Administrator

param(
    [string]$SiteName = "CAD-Hub",
    [int]$Port = 8080,
    [string]$CADViewerPath = "",
    [string]$StepReaderPath = "",
    [string]$HostName = ""
)

# Màu sắc cho output
function Write-Success { param($Message) Write-Host $Message -ForegroundColor Green }
function Write-Info { param($Message) Write-Host $Message -ForegroundColor Cyan }
function Write-Warning { param($Message) Write-Host $Message -ForegroundColor Yellow }
function Write-Error { param($Message) Write-Host $Message -ForegroundColor Red }

Write-Info "=========================================="
Write-Info "CAD Dual Apps IIS Deployment Script"
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

# Đường dẫn CAD Viewer
if ([string]::IsNullOrEmpty($CADViewerPath)) {
    $CADViewerPath = Join-Path $ScriptDir "cad-viewer-local\packages\cad-viewer-example\dist"
}

# Đường dẫn STEP Reader
if ([string]::IsNullOrEmpty($StepReaderPath)) {
    $StepReaderPath = Join-Path $ScriptDir "StepFileReader\web\dist"
}

Write-Info "CAD Viewer path: $CADViewerPath"
Write-Info "STEP Reader path: $StepReaderPath"

# Kiểm tra thư mục dist có tồn tại không
if (-not (Test-Path $CADViewerPath)) {
    Write-Error "Thư mục CAD Viewer không tồn tại: $CADViewerPath"
    Write-Warning "Hãy build CAD Viewer trước hoặc chỉ định đường dẫn đúng"
    exit 1
}

if (-not (Test-Path $StepReaderPath)) {
    Write-Error "Thư mục STEP Reader không tồn tại: $StepReaderPath"
    Write-Warning "Hãy build STEP Reader trước hoặc chỉ định đường dẫn đúng"
    exit 1
}

# Tạo thư mục deployment chung
$DeployPath = Join-Path $ScriptDir "deploy-hub"
Write-Info "Đang tạo thư mục deployment: $DeployPath"

if (Test-Path $DeployPath) {
    Write-Warning "Thư mục deploy đã tồn tại, đang xóa..."
    Remove-Item -Path $DeployPath -Recurse -Force
}

New-Item -Path $DeployPath -ItemType Directory | Out-Null

# Tạo thư mục con cho mỗi app
$CADViewerDest = Join-Path $DeployPath "cad-viewer"
$StepReaderDest = Join-Path $DeployPath "step-reader"

Write-Info "Đang copy files..."
Copy-Item -Path $CADViewerPath -Destination $CADViewerDest -Recurse
Copy-Item -Path $StepReaderPath -Destination $StepReaderDest -Recurse

Write-Success "Copy files thành công!"

# Tạo trang landing
Write-Info "Đang tạo trang landing..."

$LandingHtml = @"
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAD Tools Hub</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            width: 100%;
        }
        
        .header {
            text-align: center;
            color: white;
            margin-bottom: 60px;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .app-card {
            background: white;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        
        .app-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
        
        .app-icon {
            font-size: 4rem;
            margin-bottom: 20px;
        }
        
        .app-title {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .app-description {
            color: #666;
            font-size: 1rem;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .app-button {
            display: inline-block;
            padding: 12px 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .app-button:hover {
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
            transform: scale(1.05);
        }
        
        .footer {
            text-align: center;
            color: white;
            opacity: 0.8;
            margin-top: 40px;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .apps-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔧 CAD Tools Hub</h1>
            <p>Chọn công cụ bạn muốn sử dụng</p>
        </div>
        
        <div class="apps-grid">
            <div class="app-card" onclick="window.location.href='./cad-viewer/'">
                <div class="app-icon">📐</div>
                <h2 class="app-title">CAD Viewer</h2>
                <p class="app-description">
                    Xem và phân tích các file DWG, DXF với đầy đủ tính năng.
                    Hỗ trợ zoom, pan, measure và nhiều công cụ khác.
                </p>
                <a href="./cad-viewer/" class="app-button">Mở CAD Viewer</a>
            </div>
            
            <div class="app-card" onclick="window.location.href='./step-reader/'">
                <div class="app-icon">📦</div>
                <h2 class="app-title">STEP File Reader</h2>
                <p class="app-description">
                    Đọc và hiển thị file STEP (ISO 10303-21).
                    Xem mô hình 3D và thông tin kỹ thuật chi tiết.
                </p>
                <a href="./step-reader/" class="app-button">Mở STEP Reader</a>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2024 CAD Tools Hub. Tất cả các ứng dụng chạy trên local host.</p>
        </div>
    </div>
</body>
</html>
"@

$IndexPath = Join-Path $DeployPath "index.html"
$LandingHtml | Out-File -FilePath $IndexPath -Encoding UTF8

Write-Success "Đã tạo trang landing!"

# Tạo web.config cho trang chính
$WebConfigContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <staticContent>
            <mimeMap fileExtension=".json" mimeType="application/json" />
            <mimeMap fileExtension=".wasm" mimeType="application/wasm" />
            <mimeMap fileExtension=".js" mimeType="application/javascript" />
        </staticContent>
        <rewrite>
            <rules>
                <!-- Redirect root to index.html -->
                <rule name="Root" stopProcessing="true">
                    <match url="^$" />
                    <action type="Rewrite" url="index.html" />
                </rule>
                <!-- Don't rewrite if file/directory exists -->
                <rule name="StaticFiles" stopProcessing="true">
                    <match url=".*" />
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" />
                    </conditions>
                    <action type="None" />
                </rule>
                <rule name="Directories" stopProcessing="true">
                    <match url=".*" />
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" />
                    </conditions>
                    <action type="None" />
                </rule>
            </rules>
        </rewrite>
        <httpProtocol>
            <customHeaders>
                <add name="Cache-Control" value="no-cache, no-store, must-revalidate" />
            </customHeaders>
        </httpProtocol>
    </system.webServer>
</configuration>
"@

$WebConfigPath = Join-Path $DeployPath "web.config"
$WebConfigContent | Out-File -FilePath $WebConfigPath -Encoding UTF8

Write-Success "Đã tạo web.config!"

# Kiểm tra xem site đã tồn tại chưa
$ExistingSite = Get-Website -Name $SiteName -ErrorAction SilentlyContinue

if ($ExistingSite) {
    Write-Warning "Website '$SiteName' đã tồn tại."
    $Response = Read-Host "Bạn có muốn cập nhật website này? (Y/N)"
    
    if ($Response -eq "Y" -or $Response -eq "y") {
        Write-Info "Đang dừng website..."
        Stop-Website -Name $SiteName -ErrorAction SilentlyContinue
        
        Write-Info "Đang cập nhật physical path..."
        Set-ItemProperty "IIS:\Sites\$SiteName" -Name physicalPath -Value $DeployPath
        
        Write-Info "Đang khởi động lại website..."
        Start-Website -Name $SiteName
        
        Write-Success "Website đã được cập nhật thành công!"
    } else {
        Write-Info "Hủy deploy."
        exit 0
    }
} else {
    # Kiểm tra port đã được sử dụng chưa
    $ExistingBinding = Get-WebBinding | Where-Object { $_.bindingInformation -like "*:$Port:*" }
    if ($ExistingBinding) {
        Write-Error "Port $Port đã được sử dụng bởi website khác."
        Write-Info "Các port đang được sử dụng:"
        Get-WebBinding | ForEach-Object { Write-Info "  - $($_.bindingInformation)" }
        exit 1
    }
    
    # Tạo website mới
    Write-Info "Đang tạo website mới '$SiteName'..."
    
    try {
        if ($HostName) {
            New-Website -Name $SiteName -PhysicalPath $DeployPath -Port $Port -HostHeader $HostName
        } else {
            New-Website -Name $SiteName -PhysicalPath $DeployPath -Port $Port
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
Write-Info "  - Path: $DeployPath"
Write-Info "  - Port: $Port"
if ($HostName) {
    Write-Info "  - URL: http://$HostName`:$Port"
} else {
    Write-Info "  - URL: http://localhost:$Port"
}
Write-Info ""
Write-Info "Các ứng dụng:"
Write-Info "  - Landing Page: http://localhost:$Port"
Write-Info "  - CAD Viewer: http://localhost:$Port/cad-viewer/"
Write-Info "  - STEP Reader: http://localhost:$Port/step-reader/"
Write-Info ""
Write-Success "Bạn có thể truy cập trang chủ để chọn ứng dụng!"
Write-Info ""
Write-Warning "Lưu ý:"
Write-Warning "  - Đảm bảo đã cài đặt URL Rewrite Module"
Write-Warning "  - Kiểm tra Firewall nếu không truy cập được từ máy khác"
Write-Info ""
