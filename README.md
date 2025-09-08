# ByteHub Website

🌐 **Innovating Tomorrow's Digital Landscape**

A modern, responsive website built with React, Vite, and Tailwind CSS featuring dark/light mode toggle, smooth animations, and optimized for GitHub Pages deployment.

## 🚀 Live Demo

Visit the live website: [ByteHub Website](https://yourusername.github.io/bytehub-website/)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Scrolling**: Navigation with scroll-to-section functionality
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Integration**: Direct WhatsApp, email, and social media links
- **Team Showcase**: Professional team member profiles with photos
- **Service Offerings**: Detailed service cards with pricing information
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bytehub-website.git
   cd bytehub-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Update the repository name in `vite.config.js`**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/', // Replace with your actual repo name
     build: {
       outDir: 'dist',
     },
   })
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
bytehub-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation & theme toggle
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Services.jsx     # Service offerings
│   │   ├── GlobalImpact.jsx # Impact section
│   │   ├── About.jsx        # Team & company info
│   │   ├── Pricing.jsx      # Pricing plans
│   │   └── Footer.jsx       # Footer with social links
│   ├── assets/
│   │   └── images/          # Team photos and assets
│   ├── hooks/
│   │   └── useTheme.js      # Theme management hook
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Navy**: `#0a1a3d` - Primary brand color
- **Gold**: `#fbbf24` - Accent color
- **Dark BG**: `#0f172a` - Dark mode background
- **Dark Card**: `#1e293b` - Dark mode cards

### Fonts
Uses Inter font family from Google Fonts for a clean, modern appearance.

### Team Photos
Replace images in `src/assets/images/` with your team photos. Supported formats: JPG, PNG, WebP.

## 📱 Contact Information

- **Email**: [byte.hub77@gmail.com](mailto:byte.hub77@gmail.com)
- **WhatsApp**: [+254 790 775 978](https://wa.me/254790775978)
- **Instagram**: [@bytehub.it](https://www.instagram.com/bytehub.it)
- **TikTok**: [@bytehub.it](https://www.tiktok.com/@bytehub.it)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vite** for the lightning-fast build tool

---

**Built with ❤️ by ByteHub Team**

*Innovating Tomorrow's Digital Landscape*