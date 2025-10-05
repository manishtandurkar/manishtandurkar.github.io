/* ============================================
   Particle Animation for Hero Background
   Using Canvas API
   ============================================ */

(function() {
    'use strict';

    // Get the canvas element
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();

    // Particle configuration
    const config = {
        particleCount: 80,
        particleSize: 2,
        connectionDistance: 150,
        particleSpeed: 0.5,
        lineWidth: 0.5,
        particleColor: 'rgba(255, 255, 255, 0.8)',
        lineColor: 'rgba(255, 255, 255, 0.2)',
    };

    // Particle class
    class Particle {
        constructor() {
            this.reset();
            // Random initial position
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.radius = Math.random() * config.particleSize + 1;
        }

        update() {
            // Update position
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -1;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -1;
            }

            // Keep particles within bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = config.particleColor;
            ctx.fill();
        }
    }

    // Create particles array
    const particles = [];
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
    }

    // Mouse interaction
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Track mouse movement
    canvas.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    // Reset mouse position when leaving canvas
    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Draw line if particles are close enough
                if (distance < config.connectionDistance) {
                    const opacity = 1 - (distance / config.connectionDistance);
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
                    ctx.lineWidth = config.lineWidth;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            // Connect particles to mouse
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const opacity = 1 - (distance / mouse.radius);
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
                    ctx.lineWidth = config.lineWidth * 2;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();

                    // Create repulsion effect
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particles[i].vx += Math.cos(angle) * force * 0.2;
                    particles[i].vy += Math.sin(angle) * force * 0.2;
                }
            }
        }
    }

    // Animation loop
    function animate() {
        // Clear canvas with slight transparency for trail effect
        ctx.fillStyle = 'rgba(102, 126, 234, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        drawConnections();

        requestAnimationFrame(animate);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        setCanvasSize();
        // Reposition particles on resize
        particles.forEach(particle => {
            if (particle.x > canvas.width) particle.x = canvas.width;
            if (particle.y > canvas.height) particle.y = canvas.height;
        });
    });

    // Start animation
    // animate(); // Disabled in favor of animateWithShapes below

    // Add floating shapes (optional enhancement)
    function drawFloatingShapes() {
        const shapes = [
            { x: canvas.width * 0.1, y: canvas.height * 0.2, size: 60 },
            { x: canvas.width * 0.8, y: canvas.height * 0.3, size: 80 },
            { x: canvas.width * 0.2, y: canvas.height * 0.7, size: 50 },
            { x: canvas.width * 0.9, y: canvas.height * 0.8, size: 70 }
        ];

        const time = Date.now() * 0.001;

        shapes.forEach((shape, index) => {
            const offsetX = Math.sin(time + index) * 20;
            const offsetY = Math.cos(time + index) * 20;

            ctx.beginPath();
            ctx.arc(
                shape.x + offsetX,
                shape.y + offsetY,
                shape.size,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.fill();
        });
    }

    // Enhanced animation loop with floating shapes
    function animateWithShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw floating shapes
        drawFloatingShapes();

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        drawConnections();

        requestAnimationFrame(animateWithShapes);
    }

    // Use enhanced animation with shapes
    animateWithShapes();

})();
