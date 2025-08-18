# Oliver Hiltz-Perron's Portfolio Website

[![Deploy to GitHub Pages](https://github.com/OliverHiltz-Perron/OliverHiltz-Perron.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/OliverHiltz-Perron/OliverHiltz-Perron.github.io/actions/workflows/deploy.yml)

A modern, responsive portfolio website showcasing my projects, research papers, and professional accomplishments. Built with vanilla HTML, CSS, and JavaScript, featuring automatic GitHub repository integration.

🌐 **Live Site**: [https://oliverhiltz-perron.github.io](https://oliverhiltz-perron.github.io)

## ✨ Features

### 🎨 Modern Design
- Clean, professional layout with gradient color schemes
- Fully responsive design for all devices
- Smooth scroll animations and interactive hover effects
- Dark mode accents with blue/purple gradients

### 📊 Dynamic Content
- **Automatic GitHub Integration**: Fetches and displays latest public repositories via GitHub API
- **Project Filtering**: Filter projects by category (Featured, GitHub, Research)
- **Real-time Updates**: GitHub projects update automatically without manual maintenance

### 📚 Organized Sections
1. **Hero Section**: Eye-catching introduction with gradient background
2. **About**: Personal bio, education, and experience
3. **Projects**: Mix of featured projects and live GitHub repositories
4. **Papers**: Dedicated section for research publications
5. **Skills**: Visual skill bars organized by categories
6. **Contact**: Professional links grid (GitHub, LinkedIn, Resume, etc.)

## 🚀 Quick Start

### Prerequisites
- A GitHub account
- Basic knowledge of HTML/CSS (for customization)

### Installation

1. **Fork this repository** or clone it:
   ```bash
   git clone https://github.com/OliverHiltz-Perron/OliverHiltz-Perron.github.io.git
   ```

2. **Customize your information**:
   - Edit `index.html` to update personal information
   - Replace placeholder text with your actual content
   - Update social media links in the Contact section

3. **Configure GitHub username**:
   - Open `script.js`
   - Update line 129 with your GitHub username:
     ```javascript
     const username = 'YourGitHubUsername';
     ```

4. **Deploy to GitHub Pages**:
   - Push changes to your repository
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/` (root) folder
   - Your site will be live at `https://[username].github.io`

## 📝 Customization Guide

### Adding Papers
Edit the Papers section in `index.html`:
```html
<div class="paper-card">
    <div class="paper-icon">
        <i class="fas fa-file-alt"></i>
    </div>
    <div class="paper-content">
        <h3>Your Paper Title</h3>
        <p class="paper-authors">Your Name, Co-Authors</p>
        <p class="paper-venue">Conference/Journal, Year</p>
        <p class="paper-description">Brief description</p>
        <div class="paper-links">
            <a href="link-to-pdf" target="_blank" class="paper-link">
                <i class="fas fa-file-pdf"></i> PDF
            </a>
        </div>
    </div>
</div>
```

### Adding Featured Projects
Add project cards in the Projects section:
```html
<div class="project-card featured-project" data-category="featured">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Technology1</span>
            <span>Technology2</span>
        </div>
        <div class="project-links">
            <a href="github-link" target="_blank"><i class="fab fa-github"></i> Code</a>
            <a href="live-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### Updating Contact Links
Modify the contact cards in `index.html`:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-card">
    <i class="fab fa-linkedin"></i>
    <h3>LinkedIn</h3>
    <p>Professional network</p>
</a>
```

### Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --gradient-start: #3b82f6;     /* Gradient start color */
    --gradient-end: #8b5cf6;       /* Gradient end color */
    /* ... other colors */
}
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Dynamic content and GitHub API integration
- **Font Awesome**: Icon library
- **GitHub API**: Automatic repository fetching
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## 📂 Project Structure

```
OliverHiltz-Perron.github.io/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript functionality
├── README.md               # Documentation
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

### Making Changes
1. Edit the relevant files
2. Test locally
3. Commit and push:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- GitHub for hosting and API
- Inspired by modern portfolio designs

## 📧 Contact

Feel free to reach out:
- GitHub: [@OliverHiltz-Perron](https://github.com/OliverHiltz-Perron)
- Email: [your.email@example.com](mailto:your.email@example.com)

---

**Note**: Remember to update all placeholder content with your actual information before deploying!