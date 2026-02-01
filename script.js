// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // ===== Music Player =====
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵 Play Music';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(error => {
                console.log('Music playback failed:', error);
            });
            musicToggle.textContent = '⏸️ Pause Music';
            musicToggle.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // ===== Landing Page Transition =====
    const enterBtn = document.getElementById('enterBtn');
    const landingSection = document.getElementById('landingSection');
    const mainContent = document.getElementById('mainContent');

    enterBtn.addEventListener('click', function() {
        landingSection.style.animation = 'fadeOut 0.8s ease-out forwards';

        setTimeout(() => {
            landingSection.style.display = 'none';
            mainContent.classList.add('active');

            // Auto-play music when entering (if not already playing)
            if (!isMusicPlaying) {
                bgMusic.play().catch(error => {
                    console.log('Auto-play prevented:', error);
                });
                musicToggle.textContent = '⏸️ Pause Music';
                musicToggle.classList.add('playing');
                isMusicPlaying = true;
            }

            // Start floating hearts
            startFloatingHearts();
        }, 800);
    });

    // ===== Floating Hearts Animation =====
    function createHeart() {
        const heartsContainer = document.getElementById('heartsContainer');
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Random position
        heart.style.left = Math.random() * 100 + '%';

        // Random delay
        heart.style.animationDelay = Math.random() * 3 + 's';

        // Random size
        const size = Math.random() * 20 + 15;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    function startFloatingHearts() {
        // Create hearts periodically
        setInterval(() => {
            createHeart();
        }, 800);
    }

    // ===== Interactive Candle =====
    const candle = document.getElementById('candle');
    const wishMessage = document.getElementById('wishMessage');
    let candleBlown = false;

    candle.addEventListener('click', function() {
        if (!candleBlown) {
            candle.classList.add('blown-out');
            wishMessage.classList.remove('hidden');
            candleBlown = true;

            // Create celebration particles
            createCelebrationParticles();

            // Play celebration sound if available
            playSound('celebration');
        }
    });

    // ===== Photo Gallery Enhancement =====
    const photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach((item, index) => {
        // Add entrance animation with delay
        item.style.opacity = '0';
        item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;

        // Add click to enlarge functionality
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.getAttribute('src');
            showImageModal(src);
        });
    });

    // ===== Image Modal for Full View =====
    function showImageModal(imgSrc) {
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;

        modal.appendChild(img);
        document.body.appendChild(modal);

        // Close on click
        modal.addEventListener('click', function() {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }

    // ===== Celebration Particles =====
    function createCelebrationParticles() {
        const colors = ['#ff6b9d', '#ffc2d4', '#ff4757', '#ffd700', '#ffeaa7'];

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                top: 50%;
                left: 50%;
                pointer-events: none;
                z-index: 9999;
            `;

            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 50;
            const velocity = 5 + Math.random() * 5;
            const tx = Math.cos(angle) * velocity * 50;
            const ty = Math.sin(angle) * velocity * 50;

            particle.style.animation = `explode 1s ease-out forwards`;
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Add explosion animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            to {
                opacity: 0;
            }
        }

        @keyframes explode {
            to {
                transform: translate(var(--tx), var(--ty));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ===== Sound Effects (Optional) =====
    function playSound(soundName) {
        // Try to play sound if file exists
        const sound = new Audio(`assets/sounds/${soundName}.mp3`);
        sound.play().catch(error => {
            console.log('Sound playback failed:', error);
        });
    }

    // ===== Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.message-section, .gallery-section, .wishes-section, .final-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // ===== Click Effects =====
    document.addEventListener('click', function(e) {
        // Create a ripple effect on click
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid rgba(255, 107, 157, 0.5);
            border-radius: 50%;
            top: ${e.clientY - 15}px;
            left: ${e.clientX - 15}px;
            pointer-events: none;
            z-index: 9998;
            animation: rippleEffect 0.6s ease-out;
        `;

        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ===== Typing Effect for Message (Optional Enhancement) =====
    function typeWriter(element, text, speed = 50) {
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

    // ===== Console Easter Egg =====
    console.log('%c🎉 Happy Birthday to the Most Beautiful Princess Dua! 🎉', 'font-size: 30px; color: #ff6b9d; font-weight: bold;');
    console.log('%cMade with ❤️ by Mehroz for an amazing best friend!', 'font-size: 16px; color: #ff4757;');
});
