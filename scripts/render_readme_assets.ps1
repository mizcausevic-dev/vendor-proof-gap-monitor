$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$screenshots = Join-Path $root "screenshots"
New-Item -ItemType Directory -Force -Path $screenshots | Out-Null
Get-ChildItem -Path $screenshots -File -ErrorAction SilentlyContinue | Remove-Item -Force

Add-Type -AssemblyName System.Drawing

function New-ProofImage {
  param(
    [string]$Title,
    [string]$Subtitle,
    [string[]]$Bullets,
    [string]$OutputPath
  )

  $width = 1600
  $height = 900
  $bmp = New-Object System.Drawing.Bitmap($width, $height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "AntiAlias"
  $bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(7, 10, 15))
  $panelPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 120, 255, 170), 2)
  $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(233, 243, 255))
  $mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(186, 200, 218))
  $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(55, 255, 139))
  $dotBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(25, 199, 255))
  $fontTitle = New-Object System.Drawing.Font("Georgia", 30, [System.Drawing.FontStyle]::Bold)
  $fontSub = New-Object System.Drawing.Font("Segoe UI", 16)
  $fontBody = New-Object System.Drawing.Font("Segoe UI", 14)

  $g.FillRectangle($bg, 0, 0, $width, $height)
  $rect = New-Object System.Drawing.Rectangle(40, 40, 1520, 820)
  $g.DrawRectangle($panelPen, $rect)
  $g.DrawString("Vendor Proof Gap Monitor", $fontSub, $accentBrush, 70, 85)
  $g.DrawString($Title, $fontTitle, $textBrush, 70, 135)
  $subtitleRect = New-Object System.Drawing.RectangleF(70, 220, 1400, 80)
  $g.DrawString($Subtitle, $fontSub, $mutedBrush, $subtitleRect)

  $y = 320
  foreach ($bullet in $Bullets) {
    $g.FillEllipse($dotBrush, 85, $y + 8, 10, 10)
    $bulletRect = New-Object System.Drawing.RectangleF(110, $y, 1320, 48)
    $g.DrawString($bullet, $fontBody, $textBrush, $bulletRect)
    $y += 72
  }

  $g.DrawString("Synthetic proof render for README packaging.", $fontSub, $mutedBrush, 70, 800)
  $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-ProofImage -Title "Vendor proof overview for the next board or diligence cycle" -Subtitle "One executive surface for claim coverage, freshness, benchmark confidence, and reuse safety." -Bullets @(
  "The overview keeps reusable proof packs, stale evidence, and blocked ownership in one board-readable view.",
  "Leadership can see which proof packets are safe to reuse now and which still require manual rescue work.",
  "This layer turns scattered diligence evidence into reusable operating leverage instead of ad hoc packet assembly."
) -OutputPath (Join-Path $screenshots "01-overview-proof.png")

New-ProofImage -Title "Proof lane keeps owners, blockers, and next moves connected" -Subtitle "Every route retains the owner, audience, proof theme, headline gap, and next move." -Bullets @(
  "The proof-lane view makes it obvious which packets are reusable now and which are still slowed by missing ownership.",
  "Blockers stay tied to the actual board or diligence packet instead of drifting into vague enablement language.",
  "Leadership can tighten the proof room before the next investor, buyer, or board review starts."
) -OutputPath (Join-Path $screenshots "02-proof-lane-proof.png")

New-ProofImage -Title "Gap matrix shows where proof freshness and depth still break" -Subtitle "Claim coverage, freshness, depth, and company-tag traces stay visible in one reusable proof inventory." -Bullets @(
  "This view keeps IBM, Azure, CyberArk, FinTech, biotech, and healthcare traces tied to actual live surfaces.",
  "Coverage and freshness gaps stay visible before a team promises more than the proof can support.",
  "Leadership can see where the next proof investment will save the most diligence time."
) -OutputPath (Join-Path $screenshots "03-gap-matrix-proof.png")

New-ProofImage -Title "Reuse posture keeps benchmarking tied to source proof" -Subtitle "Proof pressure remains grounded in reuse safety, benchmark confidence, and source-surface linkage." -Bullets @(
  "The executive story stays tied to actual evidence ownership and source surfaces rather than abstract positioning copy.",
  "Slow review paths remain visible before they turn into diligence bottlenecks.",
  "This creates a repeatable cadence for reusable proof packs and faster board-safe reviews."
) -OutputPath (Join-Path $screenshots "04-reuse-posture-proof.png")
