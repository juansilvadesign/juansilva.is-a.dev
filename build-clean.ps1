param([string]$DistDir = "dist")

$DirsToClean = @($DistDir, ".next")

foreach ($Dir in $DirsToClean) {
    Write-Host "Cleaning $Dir directory..." -ForegroundColor Yellow

    if (Test-Path $Dir) {
        try {
            Remove-Item $Dir -Recurse -Force -ErrorAction Stop
            Write-Host "Successfully cleaned $Dir directory" -ForegroundColor Green
        }
        catch {
            Write-Host "Normal removal failed for $Dir, trying alternative method..." -ForegroundColor Yellow
            try {
                $tempDir = "temp_empty_" + (Get-Random)
                New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
                robocopy $tempDir $Dir /MIR /R:1 /W:1 | Out-Null
                Remove-Item $tempDir -Force | Out-Null
                Remove-Item $Dir -Force | Out-Null
                Write-Host "Successfully cleaned $Dir using alternative method" -ForegroundColor Green
            }
            catch {
                Write-Host "Could not fully clean $Dir directory, but build will continue" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "$Dir directory does not exist, nothing to clean" -ForegroundColor Green
    }
}