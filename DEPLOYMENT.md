# 🚀 Quick Deployment Guide

## Steps to Deploy Your ByteHub Website on GitHub Pages

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (+ icon in the top right)
3. Name your repository: `bytehub-website` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 2. Update Configuration
Before pushing, update the `vite.config.js` file:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/bytehub-website/', // ← Change this to your repository name
  build: {
    outDir: 'dist',
  },
})
```

### 3. Initialize Git and Push
Open PowerShell in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial ByteHub website commit"

# Add your GitHub repository as origin
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bytehub-website.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site

### 5. Access Your Website
After a few minutes, your website will be available at:
```
https://YOUR_USERNAME.github.io/bytehub-website/
```

## 🔄 Making Updates

To update your website:
1. Make changes to your files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. GitHub Actions will automatically redeploy your site

## 📱 Testing Locally

To test changes before deploying:
```bash
npm run dev
```
Your site will be available at `http://localhost:5173/bytehub-website/`

## 🛠️ Customization Tips

### Update Team Photos
- Replace images in `src/assets/images/`
- Keep the same filenames or update the imports in `About.jsx`

### Change Colors
- Edit `tailwind.config.js` for theme colors
- Update CSS custom properties in `src/index.css`

### Add New Sections
- Create new components in `src/components/`
- Import and add them to `App.jsx`

### Update Contact Information
- Edit links in `Header.jsx` and `Footer.jsx`
- Update email addresses and social media links

## 🆘 Troubleshooting

**Site not loading?**
- Check that the repository name matches the `base` in `vite.config.js`
- Ensure GitHub Pages is enabled and using GitHub Actions

**Images not showing?**
- Verify image paths in the components
- Make sure images are in the `src/assets/images/` folder

**Build errors?**
- Check the "Actions" tab on GitHub for error details
- Ensure all dependencies are listed in `package.json`

---

**Need help?** Contact ByteHub at byte.hub77@gmail.com