document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // 2. COPY EMAIL TO CLIPBOARD
    document.getElementById('copy-email').addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the page from jumping

        const email = "abrshiz@yahoo.com";

        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Change button text temporarily to show it worked
            const originalText = this.innerText;
            this.innerText = "Email Copied!";
            this.style.borderColor = "var(--accent-sky)";
            this.style.color = "var(--accent-sky)";

            // Revert back after 2 seconds
            setTimeout(() => {
                this.innerText = originalText;
                this.style.borderColor = "";
                this.style.color = "";
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    // 3. SCROLL REVEAL ANIMATION
    // This uses the Intersection Observer API for high performance
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, revealOptions);

    // Elements to animate
    const elementsToReveal = document.querySelectorAll('.project-card, .skill-item, .hero-content');

    elementsToReveal.forEach(el => {
        el.classList.add('reveal-hidden');
        revealOnScroll.observe(el);
    });

    // 4. NAVBAR SCROLL EFFECT
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(2, 6, 23, 0.95)";
            nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
            nav.style.padding = "1rem 10%";
        } else {
            nav.style.background = "rgba(2, 6, 23, 0.8)";
            nav.style.borderBottom = "1px solid transparent";
            nav.style.padding = "1.5rem 10%";
        }
    });
});