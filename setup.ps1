# Live Session App - Quick Start Script
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "   Live Session App - Setup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking MongoDB status..." -ForegroundColor Yellow
$mongoProcess = Get-Process mongod -ErrorAction SilentlyContinue
if ($mongoProcess) {
    Write-Host "✓ MongoDB is running" -ForegroundColor Green
} else {
    Write-Host "⚠ MongoDB is not running. Please start MongoDB first." -ForegroundColor Red
    Write-Host "  You can start it with: net start MongoDB" -ForegroundColor Yellow
    Write-Host "  Or run: mongod" -ForegroundColor Yellow
    exit
}

# Install backend dependencies
Write-Host ""
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend
npm install

# Install frontend dependencies
Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location ../frontend
npm install

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "   Setup Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start the application:" -ForegroundColor Cyan
Write-Host "1. Backend: cd backend && npm run dev" -ForegroundColor White
Write-Host "2. Frontend: cd frontend && npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Or use the start.ps1 script to run both!" -ForegroundColor Cyan
