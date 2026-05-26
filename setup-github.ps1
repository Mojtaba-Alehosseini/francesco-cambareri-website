# Francesco Cambareri website — GitHub + Vercel one-shot setup.
#
# Usage (run in the francesco-website folder, in PowerShell):
#     .\setup-github.ps1
#
# What it does:
#   1. npm install
#   2. git init + first commit
#   3. (optional) creates the GitHub repo via `gh` CLI
#   4. pushes to GitHub
#   5. prints the Vercel deploy link

$ErrorActionPreference = 'Stop'
$RepoName  = 'francesco-cambareri-website'
$RepoDesc  = 'Vintage calisthenics personal trainer website — Italian, EN, DE, FR. Built with Next.js 14.'

Write-Host '=== STEP 1: Installing dependencies ===' -ForegroundColor Cyan
if (-not (Test-Path 'node_modules')) {
    npm install
} else {
    Write-Host 'node_modules already present, skipping npm install.'
}

Write-Host ''
Write-Host '=== STEP 2: git init + first commit ===' -ForegroundColor Cyan
if (-not (Test-Path '.git')) {
    git init -b main
    git add .
    git commit -m 'feat: initial Francesco Cambareri vintage calisthenics website'
} else {
    Write-Host '.git already exists, skipping init.'
}

Write-Host ''
Write-Host '=== STEP 3: Create GitHub repo ===' -ForegroundColor Cyan
$gh = Get-Command gh -ErrorAction SilentlyContinue
if ($gh) {
    $hasRemote = git remote get-url origin 2>$null
    if (-not $hasRemote) {
        Write-Host "Creating GitHub repo '$RepoName'..."
        gh repo create $RepoName --public --description $RepoDesc --source=. --remote=origin --push
    } else {
        Write-Host "Remote 'origin' already configured: $hasRemote"
        git push -u origin main
    }
} else {
    Write-Host 'The GitHub CLI (gh) is not installed.' -ForegroundColor Yellow
    Write-Host 'Install it from https://cli.github.com/ then re-run this script.'
    Write-Host 'Or, create the repo manually at https://github.com/new and run:'
    Write-Host "    git remote add origin https://github.com/<YOUR_USER>/$RepoName.git"
    Write-Host '    git push -u origin main'
    exit 1
}

Write-Host ''
Write-Host '=== STEP 4: Deploy ===' -ForegroundColor Cyan
Write-Host 'Easiest deploy: Vercel (free for personal sites).'
Write-Host '  1. Go to https://vercel.com/new'
Write-Host '  2. Import the GitHub repo you just pushed.'
Write-Host '  3. Vercel auto-detects Next.js — click Deploy.'
Write-Host '  4. Site is live at https://<repo-name>.vercel.app'
Write-Host ''
Write-Host 'Alternative: Cloudflare Pages, Netlify, or self-host with `npm run start`.'
Write-Host ''
Write-Host 'Local preview right now:'
Write-Host '    npm run dev   # then open http://localhost:3000'
