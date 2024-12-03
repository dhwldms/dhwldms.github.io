document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.about-item');

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });
});
