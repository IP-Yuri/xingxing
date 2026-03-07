
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Kinetic Observer Configuration
    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -15% 0px', // Trigger slightly higher up the viewport for fluidity
        threshold: 0.1 
    };

    // 2. Kinetic Callback execution
    const kineticObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply layout execution class
                entry.target.classList.add('is-visible');
                // Sever observer link once executed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Bind Observer to DOM Elements
    const elementsToReveal = document.querySelectorAll('.avyr-reveal');
    elementsToReveal.forEach(element => kineticObserver.observe(element));
    
    // 4. Smooth Scroll Binding for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/**
 * AVYR ENGINEERING STANDARDS
 * Vanilla JS Kinetics Module
 * Directives: Zero external libraries. Hyper-clean IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Kinetic Observer Configuration
    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -10% 0px', 
        threshold: 0.1 
    };

    // 2. Kinetic Callback Execution
    const kineticObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply layout execution class
                entry.target.classList.add('is-visible');
                // Sever observer link once executed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Bind Observer to DOM Elements
    const elementsToReveal = document.querySelectorAll('.avyr-reveal');
    elementsToReveal.forEach(element => kineticObserver.observe(element));
    
    // 4. Smooth Scroll for Anchor Links (Menu Categories)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Adjust scroll position to account for the sticky header
                const headerOffset = document.querySelector('.foyer-header').offsetHeight;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 40; // 40px extra breathing room

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});