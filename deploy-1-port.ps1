# Deploy CAD Tools - 1 Port voi Launcher
# Chay voi quyen Administrator

param(
    [string]$SiteName = "CAD-Tools",
    [int]$Port = 801
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deploy CAD Tools - Single Port" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kiem tra quyen Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Can chay voi quyen Administrator!" -ForegroundColor Red
    pause
    exit 1
}

# Import IIS Module
Import-Module WebAdministration -ErrorAction SilentlyContinue
if (-not $?) {
    Write-Host "IIS chua duoc cai dat!" -ForegroundColor Red
    pause
    exit 1
}

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Duong dan nguon
$CADViewerPath = Join-Path $ScriptDir "cad-viewer-local\packages\cad-viewer-example\dist"
$StepReaderPath = Join-Path $ScriptDir "StepFileReader\web\dist"
$LauncherPath = Join-Path $ScriptDir "CAD-Tools-Launcher.html"
$LogoJpgPath = Join-Path $ScriptDir "StepFileReader\web\LogoVPIC1.jpg"
$LogoIcoPath = Join-Path $ScriptDir "StepFileReader\web\logo.ico"

Write-Host "Kiem tra duong dan..." -ForegroundColor Yellow

# Kiem tra
if (-not (Test-Path $CADViewerPath)) {
    Write-Host "[X] CAD Viewer chua build: $CADViewerPath" -ForegroundColor Red
    pause
    exit 1
}

if (-not (Test-Path $StepReaderPath)) {
    Write-Host "[X] STEP Reader chua build: $StepReaderPath" -ForegroundColor Red
    pause
    exit 1
}

if (-not (Test-Path $LauncherPath)) {
    Write-Host "[X] Khong tim thay Launcher: $LauncherPath" -ForegroundColor Red
    pause
    exit 1
}

if (-not (Test-Path $LogoJpgPath)) {
    Write-Host "[!] Khong tim thay logo JPG, bo qua..." -ForegroundColor Yellow
}

if (-not (Test-Path $LogoIcoPath)) {
    Write-Host "[!] Khong tim thay logo ICO, bo qua..." -ForegroundColor Yellow
}

Write-Host "[OK] Tat ca file da san sang!" -ForegroundColor Green
Write-Host ""

# Tao thu muc deploy - Dung thu muc IIS mac dinh thay vi Desktop
$DeployPath = "C:\inetpub\wwwroot\CAD-Tools"
Write-Host "Tao thu muc deploy: $DeployPath" -ForegroundColor Cyan

if (Test-Path $DeployPath) {
    Write-Host "Xoa thu muc cu..." -ForegroundColor Yellow
    Remove-Item -Path $DeployPath -Recurse -Force
}

New-Item -Path $DeployPath -ItemType Directory | Out-Null

# Copy Launcher lam trang chu
Write-Host "Copy Launcher..." -ForegroundColor Cyan
Copy-Item -Path $LauncherPath -Destination (Join-Path $DeployPath "index.html")

# Copy logo files
if (Test-Path $LogoJpgPath) {
    Write-Host "Copy logo JPG..." -ForegroundColor Cyan
    Copy-Item -Path $LogoJpgPath -Destination (Join-Path $DeployPath "LogoVPIC1.jpg")
}

if (Test-Path $LogoIcoPath) {
    Write-Host "Copy logo ICO..." -ForegroundColor Cyan
    Copy-Item -Path $LogoIcoPath -Destination (Join-Path $DeployPath "logo.ico")
}

# Copy CAD Viewer
Write-Host "Copy CAD Viewer..." -ForegroundColor Cyan
$CADDest = Join-Path $DeployPath "cad-viewer"
Copy-Item -Path $CADViewerPath -Destination $CADDest -Recurse

# Copy logo vao cad-viewer
if (Test-Path $LogoIcoPath) {
    Copy-Item -Path $LogoIcoPath -Destination (Join-Path $CADDest "logo.ico") -Force
}
if (Test-Path $LogoJpgPath) {
    Copy-Item -Path $LogoJpgPath -Destination (Join-Path $CADDest "LogoVPIC1.jpg") -Force
}

# Copy STEP Reader
Write-Host "Copy STEP Reader..." -ForegroundColor Cyan
$StepDest = Join-Path $DeployPath "step-reader"
Copy-Item -Path $StepReaderPath -Destination $StepDest -Recurse

# Copy logo vao step-reader (neu chua co)
if (Test-Path $LogoIcoPath) {
    $stepIco = Join-Path $StepDest "logo.ico"
    if (-not (Test-Path $stepIco)) {
        Copy-Item -Path $LogoIcoPath -Destination $stepIco -Force
    }
}
if (Test-Path $LogoJpgPath) {
    $stepJpg = Join-Path $StepDest "LogoVPIC1.jpg"
    if (-not (Test-Path $stepJpg)) {
        Copy-Item -Path $LogoJpgPath -Destination $stepJpg -Force
    }
}

Write-Host "[OK] Copy thanh cong!" -ForegroundColor Green
Write-Host ""

# Tao web.config
Write-Host "Tao web.config..." -ForegroundColor Cyan

$webConfigContent = @'
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <staticContent>
            <remove fileExtension=".json" />
            <remove fileExtension=".wasm" />
            <remove fileExtension=".js" />
            <mimeMap fileExtension=".json" mimeType="application/json" />
            <mimeMap fileExtension=".wasm" mimeType="application/wasm" />
            <mimeMap fileExtension=".js" mimeType="application/javascript" />
        </staticContent>
        <rewrite>
            <rules>
                <rule name="Root" stopProcessing="true">
                    <match url="^$" />
                    <action type="Rewrite" url="index.html" />
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
'@

$WebConfigPath = Join-Path $DeployPath "web.config"
[System.IO.File]::WriteAllText($WebConfigPath, $webConfigContent, [System.Text.Encoding]::UTF8)

Write-Host "[OK] web.config da tao!" -ForegroundColor Green
Write-Host ""

# Setup IIS
Write-Host "Setup IIS..." -ForegroundColor Cyan

# Xoa website cu neu ton tai
$existing = Get-Website -Name $SiteName -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "Xoa website cu..." -ForegroundColor Yellow
    Remove-Website -Name $SiteName
}

# Kiem tra port
$portPattern = ":${Port}:"
$binding = Get-WebBinding | Where-Object { $_.bindingInformation -match $portPattern }
if ($binding) {
    Write-Host "Port $Port dang duoc su dung, dung website do..." -ForegroundColor Yellow
    $site = Get-Website | Where-Object { $_.Bindings.Collection.bindingInformation -match $portPattern }
    if ($site) {
        Stop-Website -Name $site.Name -ErrorAction SilentlyContinue
    }
}

# Tao website
try {
    New-Website -Name $SiteName -PhysicalPath $DeployPath -Port $Port -Force | Out-Null
    
    # Tao Application Pool
    $AppPoolName = $SiteName + "Pool"
    if (-not (Test-Path "IIS:\AppPools\$AppPoolName")) {
        New-WebAppPool -Name $AppPoolName | Out-Null
    }
    Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name managedRuntimeVersion -Value ""
    Set-ItemProperty "IIS:\Sites\$SiteName" -Name applicationPool -Value $AppPoolName
    
    Write-Host "[OK] Website da tao!" -ForegroundColor Green
} catch {
    Write-Host "[X] Loi: $_" -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "DEPLOY THANH CONG!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Truy cap:" -ForegroundColor Cyan
Write-Host "  http://localhost:$Port" -ForegroundColor White
Write-Host ""
Write-Host "Cau truc:" -ForegroundColor Yellow
Write-Host "  /                 - Launcher (chon app)" -ForegroundColor White
Write-Host "  /cad-viewer/      - CAD Viewer" -ForegroundColor White
Write-Host "  /step-reader/     - STEP Reader" -ForegroundColor White
Write-Host ""
Write-Host "Phim tat trong Launcher:" -ForegroundColor Yellow
Write-Host "  Alt + 1  - Chuyen sang CAD Viewer" -ForegroundColor White
Write-Host "  Alt + 2  - Chuyen sang STEP Reader" -ForegroundColor White
Write-Host ""
pause
