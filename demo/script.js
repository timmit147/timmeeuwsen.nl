document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    // Verander navbar stijl bij scrollen
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Subtiele hover animatie voor project kaarten
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
