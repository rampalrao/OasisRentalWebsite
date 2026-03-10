# Quick GitHub Push Guide

## Your Project Status ✅

**Repository**: Already initialized locally
**Commit**: Initial commit created with 25 files
**Branch**: main
**Status**: Ready to push to GitHub

## Quick Steps (Copy-Paste Ready)

### 1️⃣ Create GitHub Repository
- Visit: https://github.com/new
- Repository name: `OasisRentalWebsite`
- Choose "Public" or "Private"
- Click "Create repository"
- **DO NOT** check any initialization options

### 2️⃣ Copy Your Repository URL
After creating the repo, you'll see this screen. Copy the HTTPS URL.
Example: `https://github.com/YOUR_USERNAME/OasisRentalWebsite.git`

### 3️⃣ Run These Commands in Terminal

```bash
cd /Users/rampal.rao/snapdeal/projects/OasisRentalWebsite

git remote add origin https://github.com/YOUR_USERNAME/OasisRentalWebsite.git

git branch -M main

git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### 4️⃣ Verify Success
✅ Go to https://github.com/YOUR_USERNAME/OasisRentalWebsite
✅ You should see all files and the README

## Files Included (25 total)

### HTML Files
- index.html - Homepage
- property1.html - Flat 1 details
- property2.html - Flat 2 details

### CSS Files
- styles.css - Global styles
- property.css - Property page styles

### JavaScript Files
- property.js - Image slider
- counter.js - Visit counter

### Documentation
- README.md - Full project documentation
- .gitignore - Git exclusions

### Images (10 images each)
- images/flat1-*.jpg (10 images for Flat 1)
- images/flat2-*.jpg (10 images for Flat 2)

## Troubleshooting

### Issue: "Git command not found"
**Solution**: Install Git from https://git-scm.com/

### Issue: "Authentication failed"
**Solution**: 
- Use Personal Access Token instead of password
- Create at: https://github.com/settings/tokens
- Copy and paste as password

### Issue: "remote origin already exists"
**Solution**:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/OasisRentalWebsite.git
```

### Issue: "Please tell me who you are"
**Solution** (already done, but if needed):
```bash
git config user.name "Rampal Rao"
git config user.email "rprao.2k7@gmail.com"
```

## After Pushing

### Optional: Enable GitHub Pages (Free Hosting)
1. Go to Repository Settings
2. Scroll to "Pages"
3. Select "Deploy from a branch"
4. Choose "main" branch, root folder
5. Your site will be live at: `https://YOUR_USERNAME.github.io/OasisRentalWebsite`

### Add Repository Details
- Add description
- Add topics: rental, property, website
- Add website link

## Local Git Commands Reference

```bash
# Check status
git status

# View commit history
git log

# See remote repositories
git remote -v

# View branches
git branch -a

# Create new branch
git checkout -b feature/new-feature

# Add and commit changes
git add .
git commit -m "Your message"

# Push changes
git push origin main
```

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/book/en/v2
- SSH Setup: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

**Your code is committed locally and ready to push! 🚀**

