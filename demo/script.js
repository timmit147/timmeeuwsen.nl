window.addEventListener('load', () => {
    // Gebruik de moderne PerformanceNavigationTiming API
    const perfData = window.performance.getEntriesByType("navigation")[0];
    const loadTime = Math.round(perfData.loadEventEnd);
    
    const badge = document.getElementById('speed-badge');
    if (badge) {
        badge.innerText = `Pagina geladen in ${loadTime}ms`;
        badge.style.color = "#008a76"; // Maak de tekst groen bij succes
    }
});
