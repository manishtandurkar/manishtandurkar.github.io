# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, Tailwind CSS, and JavaScript featuring smooth animations, particle effects, and interactive elements.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Particle Animation**: Interactive particle background in the hero section with mouse interaction
- **Smooth Scrolling**: Seamless navigation between sections
- **Scroll Animations**: Fade-in and reveal effects powered by ScrollReveal.js and GSAP
- **Animated Skill Bars**: Visual representation of skills with smooth progress animations
- **Project Showcase**: Interactive project cards with hover effects
- **Contact Form**: Functional contact form integrated with Formspree
- **Modern UI**: Clean design using Tailwind CSS with custom styling
- **Performance Optimized**: Lightweight and fast-loading

## 📁 Project Structure

```
Website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Custom CSS styles and animations
├── js/
│   ├── particles.js       # Particle animation using Canvas API
│   └── main.js            # Main JavaScript for interactions and animations
├── assets/
│   └── images/            # Image assets folder
│       ├── profile.jpg    # Your profile picture
│       ├── project1.jpg   # Project 1 screenshot
│       ├── project2.jpg   # Project 2 screenshot
│       ├── project3.jpg   # Project 3 screenshot
│       └── project4.jpg   # Project 4 screenshot
├── README.md              # This file
└── .gitignore            # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control and deployment)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Customize the content**
   - Open `index.html` and replace placeholder text with your information:
     - Your name and title
     - About section bio
     - Project details and links
     - Contact information
     - Social media links

3. **Add your images**
   - Add your profile picture as `assets/images/profile.jpg`
   - Add project screenshots as `assets/images/project1.jpg`, etc.
   - Recommended image sizes:
     - Profile: 400x400px (square)
     - Projects: 600x400px (landscape)

4. **Set up Formspree for the contact form**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for a free account
   - Create a new form
   - Copy your form endpoint (e.g., `https://formspree.io/f/xvgpzzzz`)
   - In `index.html`, find the contact form and replace `YOUR_FORM_ID` with your actual form ID:
     ```html
     <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

5. **Test locally**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

## 🌐 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `yourusername.github.io` (for user site) or any name (for project site)
   - Keep it public
   - Don't initialize with README (we already have one)

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all your files and folders
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/repository-name/`

### Method 2: Using Git Command Line

1. **Initialize Git repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create repository on GitHub** (via web interface)

3. **Link and push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/repository-name.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Follow step 3 from Method 1

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Choose your project folder
3. Publish repository to GitHub
4. Enable GitHub Pages (follow step 3 from Method 1)

## 📝 Customization Guide

### Colors

The default color scheme uses indigo/purple. To change colors, update the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#your-color',    // Change this
                secondary: '#your-color',  // Change this
            }
        }
    }
}
```

### Fonts

Current fonts: Poppins and Inter. To change, update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap" rel="stylesheet">
```

### Animations

- **Particle settings**: Edit `js/particles.js` - adjust `config` object
- **Scroll animations**: Edit `js/main.js` - ScrollReveal and GSAP settings
- **CSS animations**: Edit `css/style.css` - keyframes and transitions

### Sections

To add/remove sections:
1. Add/remove section in `index.html`
2. Add navigation link in the navbar
3. Update smooth scrolling in `js/main.js`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Modern JavaScript
- **GSAP**: Animation library
- **ScrollReveal.js**: Scroll animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Canvas API**: Particle animation
- **Formspree**: Contact form backend

## 🎨 Optional Enhancements

The code includes commented-out optional features you can enable:

1. **Typing Effect**: Uncomment in `js/main.js` (search for "typeWriter")
2. **Cursor Follower**: Uncomment in `js/main.js` (search for "createCursorFollower")
3. **Parallax Effect**: Uncomment in `js/main.js` (search for "parallaxEffect")

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Check file extensions match (jpg, png, etc.)

### Animations not working
- Check browser console for errors
- Ensure all CDN libraries are loading
- Check internet connection (CDN resources)

### Contact form not working
- Verify Formspree form ID is correct
- Check form action URL format
- Ensure form method is POST

### Particles not showing
- Check browser console for Canvas errors
- Ensure `js/particles.js` is loading
- Try different browser

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for your personal portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions, please open an issue.

## 👤 Author

**Manish Tandurkar**
- GitHub: [@manishtandurkar](https://github.com/manishtandurkar)
- LinkedIn: [Manish Tandurkar](https://www.linkedin.com/in/manish-tandurkar-33a5a7226/)
- Email: manishtandurkar04@gmail.com
- LeetCode: [Manish_04](https://leetcode.com/u/Manish_04/)
- Location: Bangalore, India
- Current: Software Development Intern at AVEVA | CS Student at RVCE

## 🙏 Acknowledgments

- Tailwind CSS for the amazing utility-first CSS framework
- GSAP for powerful animations
- Font Awesome for beautiful icons
- Formspree for easy form handling
- All the open-source libraries used in this project

---

**Happy Coding! 🚀**

If you found this helpful, please give it a star ⭐ on GitHub!
