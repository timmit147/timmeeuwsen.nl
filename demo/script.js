document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    
    // Verander navbar stijl bij scrollen voor de luxe vibe
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });

    // Subtiele zoom-in animatie voor de hero foto (voor die extra luxe touch)
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        hero.style.transition = 'background-size 1.5s ease';
        // hero.style.backgroundSize = '105%'; // Optioneel, kan soms prestaties beïnvloeden
    }, 500);
});
