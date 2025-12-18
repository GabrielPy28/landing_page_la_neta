// Smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Track accordion opens for analytics (optional)
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            const sectionName = this.textContent.trim();
            
            // Optional: Add analytics tracking here
            // console.log('Accordion opened:', sectionName);
        });
    });

    // Add animation class when accordion opens
    const accordionCollapses = document.querySelectorAll('.accordion-collapse');
    
    accordionCollapses.forEach(collapse => {
        collapse.addEventListener('show.bs.collapse', function() {
            this.classList.add('show-animation');
        });
        
        collapse.addEventListener('hide.bs.collapse', function() {
            this.classList.remove('show-animation');
        });
    });

    // Highlight CTA buttons on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const ctaSections = document.querySelectorAll('.cta-section, .hero-section');
    ctaSections.forEach(section => {
        observer.observe(section);
    });

    // Initialize Bootstrap tooltips for QR button
    const qrButton = document.querySelector('.btn-qr-trigger');
    if (qrButton) {
        new bootstrap.Tooltip(qrButton);
    }
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

