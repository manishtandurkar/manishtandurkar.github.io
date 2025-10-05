/* ============================================
   Main JavaScript File
   Handles: Navigation, Smooth Scrolling, Animations,
   Skill Bars, Form Handling, and Scroll Effects
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       GSAP & ScrollTrigger Setup
       ============================================ */
    
    gsap.registerPlugin(ScrollTrigger);

    /* ============================================
       Dark Mode Toggle
       ============================================ */

    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    function updateThemeIcon(isDark) {
        const icons = document.querySelectorAll('#theme-toggle i, #theme-toggle-mobile i');
        icons.forEach(icon => {
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update icon
        updateThemeIcon(isDark);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    /* ============================================
       Mobile Menu Toggle
       ============================================ */

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    /* ============================================
       Smooth Scrolling for Navigation Links
       ============================================ */
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       Active Navigation Link on Scroll
       ============================================ */
    
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);

    /* ============================================
       Navbar Scroll Effect
       ============================================ */
    
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ============================================
       ScrollReveal Animations
       ============================================ */
    
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: false
        });

        // Reveal elements with the class 'reveal-element'
        sr.reveal('.reveal-element', {
            interval: 100
        });

        // Custom reveals for specific elements
        sr.reveal('.project-card', {
            interval: 200,
            scale: 0.9
        });
    }

    /* ============================================
       Skill Bars Animation with GSAP
       ============================================ */
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power2.out'
        });
    });

    /* ============================================
       Alternative Skill Bar Animation (Fallback)
       ============================================ */
    
    function animateSkillBars() {
        const skillSection = document.getElementById('about');
        const skillBars = document.querySelectorAll('.skill-progress');
        let animated = false;

        function checkScroll() {
            if (animated) return;

            const sectionTop = skillSection.offsetTop;
            const sectionHeight = skillSection.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > sectionTop + (sectionHeight / 2)) {
                skillBars.forEach(bar => {
                    bar.classList.add('animate');
                });
                animated = true;
            }
        }

        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Check on page load
    }

    animateSkillBars();

    /* ============================================
       GSAP Animations for Hero Section
       ============================================ */
    
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4
    });

    gsap.from('.hero-cta', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6
    });

    /* ============================================
       Project Card Hover Effects with GSAP
       ============================================ */
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    /* ============================================
       Contact Form Handling
       ============================================ */
    
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // Note: Formspree handles the form submission
            // This code provides visual feedback
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitButton.disabled = true;

            // If using Formspree, let the form submit naturally
            // The following is for custom handling if needed
            
            /*
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.className = 'success p-4 rounded-lg';
                    formStatus.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
                formStatus.className = 'error p-4 rounded-lg';
                formStatus.classList.remove('hidden');
            } finally {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }
            */
        });

        // Real-time form validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() === '' && input.hasAttribute('required')) {
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });
        });
    }

    /* ============================================
       Scroll to Top Button (Optional Enhancement)
       ============================================ */
    
    function createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.className = 'fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:bg-indigo-600 z-50';
        scrollBtn.id = 'scroll-to-top';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                scrollBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    createScrollToTopButton();

    /* ============================================
       Parallax Effect for Sections (Optional)
       ============================================ */
    
    function parallaxEffect() {
        const parallaxElements = document.querySelectorAll('.reveal-element');
        
        parallaxElements.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: (i, target) => -50,
                ease: 'none'
            });
        });
    }

    // Uncomment to enable parallax effect
    // parallaxEffect();

    /* ============================================
       Typing Effect for Hero Subtitle (Optional)
       ============================================ */
    
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Uncomment to enable typing effect
    /*
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1000);
    }
    */

    /* ============================================
       Cursor Follow Effect (Optional Enhancement)
       ============================================ */
    
    function createCursorFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 transition-all duration-200 hidden md:block';
        cursor.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            const speed = 0.2;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Enlarge cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = '#8b5cf6';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = '#6366f1';
            });
        });
    }

    // Uncomment to enable cursor follower
    // createCursorFollower();

    /* ============================================
       Console Welcome Message
       ============================================ */
    
    console.log('%c Welcome to My Portfolio! ', 'background: #6366f1; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%c Built with ❤️ using HTML, Tailwind CSS, and JavaScript ', 'font-size: 14px; color: #6366f1;');

})();
