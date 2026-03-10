#!/bin/bash
# Copy-Paste Ready GitHub Push Commands
# Instructions: Replace YOUR_USERNAME with your actual GitHub username

# ====================================
# STEP 1: Create GitHub Repository
# ====================================
# 1. Go to: https://github.com/new
# 2. Repository name: OasisRentalWebsite
# 3. Choose: Public or Private
# 4. Do NOT check any initialization boxes
# 5. Click: Create repository
# 6. Copy the HTTPS URL (looks like below)

# ====================================
# STEP 2: Configure Git Remote
# ====================================
# Copy these commands and run in terminal:

cd /Users/rampal.rao/snapdeal/projects/OasisRentalWebsite

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/OasisRentalWebsite.git

# ====================================
# STEP 3: Rename Branch to Main
# ====================================
git branch -M main

# ====================================
# STEP 4: Push to GitHub
# ====================================
git push -u origin main

# This will prompt for authentication
# Use your GitHub username and Personal Access Token

# ====================================
# STEP 5: Verify Success
# ====================================
# Go to: https://github.com/YOUR_USERNAME/OasisRentalWebsite
# You should see all files there!

# ====================================
# OPTIONAL: Enable GitHub Pages Hosting
# ====================================
# 1. Go to: https://github.com/YOUR_USERNAME/OasisRentalWebsite/settings/pages
# 2. Select: Deploy from a branch
# 3. Choose: main branch, root folder
# 4. Click: Save
# 5. Your site will be at: https://YOUR_USERNAME.github.io/OasisRentalWebsite

# ====================================
# USEFUL GIT COMMANDS
# ====================================

# Check status
git status

# View commit history
git log --oneline

# See remote repositories
git remote -v

# Make changes and push
git add .
git commit -m "Your changes description"
git push origin main

# Create a new branch
git checkout -b feature/your-feature-name

# Switch to main branch
git checkout main

# Delete a branch
git branch -d branch-name

# ====================================
# TROUBLESHOOTING
# ====================================

# If you get "remote origin already exists"
git remote remove origin
# Then run the "git remote add origin" command again

# If authentication fails
# Create Personal Access Token at: https://github.com/settings/tokens
# Use the token as your password when prompted

# If you need to change remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/OasisRentalWebsite.git

# ====================================
# QUESTIONS?
# ====================================
# - GitHub Docs: https://docs.github.com
# - Git Help: https://git-scm.com/book
# - SSH Setup: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

