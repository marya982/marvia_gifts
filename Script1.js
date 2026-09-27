document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Interactive Order Button Feedback
    const orderButtons = document.querySelectorAll('.btn-sm');

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.flower-card');
            const itemName = card ? card.querySelector('h3').textContent : 'Item';

            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);

            console.log(`User selected: ${itemName}`);
        });
    });

    // 3. Simple Entrance Animation on Scroll
    const animatedElements = document.querySelectorAll('.feature-card, .flower-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});