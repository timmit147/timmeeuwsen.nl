document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.style.background = 'rgba(2, 6, 23, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.padding = '15px 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.padding = '25px 0';
        }
    });
});
