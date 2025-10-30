# Live Session App - Start Script
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "   Starting Live Session App" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
$mongoProcess = Get-Process mongod -ErrorAction SilentlyContinue
if (-not $mongoProcess) {
    Write-Host "⚠ MongoDB is not running!" -ForegroundColor Red
    Write-Host "  Please start MongoDB first." -ForegroundColor Yellow
    exit
}

Write-Host "Starting Backend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run dev"

Start-Sleep -Seconds 3

Write-Host "Starting Frontend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "   Servers Starting..." -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend will run on: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Check the new terminal windows for server output." -ForegroundColor Yellow
