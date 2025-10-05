# Quick Start Guide for Manish Tandurkar

## 🚀 Your Portfolio is Ready!

Your portfolio has been fully customized with your information from your resume. Here's what to do next:

## ✅ What's Already Done

- ✅ Name, title, and bio updated
- ✅ Contact information (email, phone, location)
- ✅ Skills bars updated with your tech stack
- ✅ Projects replaced with your actual work (GraduateXAI, Blog Platform, etc.)
- ✅ Experience section with AVEVA internship
- ✅ Education section with RVCE details (8.66 CGPA)
- ✅ Social media links (GitHub, LinkedIn, LeetCode)
- ✅ Achievements and research publication highlighted

## 📸 Step 1: Add Your Images (IMPORTANT)

Navigate to `assets/images/` and add:

1. **profile.jpg** - Your professional photo
2. **project1.jpg** - GraduateXAI visualization/screenshot
3. **project2.jpg** - Blog Platform screenshot
4. **project3.jpg** - Sentiment Analysis tool screenshot
5. **project4.jpg** - E-Learning Platform screenshot

**Don't have screenshots?** The website will show placeholder images until you add them.

## 🔗 Step 2: Update GitHub Project Links

Open `index.html` and search for `https://github.com/manishtandurkar`

Replace with your actual repository URLs for each project:
- GraduateXAI repo URL
- Blog Platform repo URL
- Sentiment Analysis repo URL
- E-Learning Platform repo URL

## 📧 Step 3: Setup Contact Form (5 minutes)

1. Go to https://formspree.io/
2. Sign up with your email (manishtandurkar04@gmail.com)
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xvgpzzzz`)
5. In `index.html`, search for `YOUR_FORM_ID`
6. Replace it with your form ID

## 🧪 Step 4: Test Locally

Simply open `index.html` in your browser, or run a local server:

```bash
# Using Python
python -m http.server 8000
# Then visit: http://localhost:8000

# Or using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## 🌐 Step 5: Deploy to GitHub Pages

### Option A: Using GitHub Web Interface (Easiest)

1. Go to https://github.com/new
2. Create repository: `manishtandurkar.github.io` (for main site)
   - OR any name like `portfolio` (for project site)
3. Upload all your files
4. Go to Settings → Pages
5. Select branch: `main`
6. Save
7. Your site will be live at: `https://manishtandurkar.github.io/`

### Option B: Using Git Command Line

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: My portfolio website"

# Create repo on GitHub first, then:
git remote add origin https://github.com/manishtandurkar/portfolio.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repo settings
```

## 🎨 Optional Customizations

### Change Color Scheme
In `index.html`, find the Tailwind config and change:
```javascript
colors: {
    primary: '#6366f1',    // Main color (currently indigo)
    secondary: '#8b5cf6',  // Accent color (currently purple)
}
```

### Add More Projects
Copy one of the project card sections in `index.html` and modify it.

### Modify Animations
- Particle settings: `js/particles.js`
- Scroll animations: `js/main.js`

## 📱 Share Your Portfolio

Once deployed, share it on:
- LinkedIn profile (Featured section)
- GitHub profile README
- Resume (add the link)
- Email signature

Example link: `https://manishtandurkar.github.io/`

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly: `profile.jpg`, `project1.jpg`, etc.
- Ensure images are in `assets/images/` folder

**Animations not working?**
- Check browser console (F12) for errors
- Make sure you have internet connection (CDN libraries)

**Form not working?**
- Verify Formspree form ID is correct
- Check form action URL format

**GitHub Pages not deploying?**
- Wait 2-3 minutes after enabling
- Check repository is public
- Verify branch name is correct

## 📞 Need Help?

Refer to:
- `README.md` - Complete documentation
- `CUSTOMIZATION_SUMMARY.md` - What was changed
- `assets/images/README.md` - Image guidelines

## 🎯 Final Checklist

Before going live, ensure:
- [ ] All images added
- [ ] Project GitHub links updated
- [ ] Formspree form configured
- [ ] Tested on mobile and desktop
- [ ] All social links working
- [ ] No placeholder text remaining
- [ ] Resume matches portfolio content

## 🌟 Your Portfolio Highlights

Your portfolio showcases:
- ✨ Published research in Explainable AI (Springer)
- 💼 Current internship at AVEVA
- 🎓 Strong academic record (8.66 CGPA at RVCE)
- 💻 Diverse project portfolio (ML, Full Stack, NLP)
- 🔧 Modern tech stack (React, Python, PyTorch, etc.)

**You're all set! Good luck with your portfolio! 🚀**

---

If you need any modifications or have questions, feel free to reach out!

**Portfolio Built with:**
- HTML5, Tailwind CSS, JavaScript
- GSAP & ScrollReveal for animations
- Canvas API for particle effects
- Fully responsive & mobile-optimized
