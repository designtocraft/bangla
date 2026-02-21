document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('cta-btn');

    ctaBtn.addEventListener('click', () => {
        alert('Welcome to DesignToCraft! We are currently building something amazing.');
        console.log('Button clicked - JavaScript is working!');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
