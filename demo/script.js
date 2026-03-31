window.addEventListener('DOMContentLoaded', () => {
    // We gebruiken de Performance Navigation Timing API
    const [perf] = performance.getEntriesByType("navigation");
    
    // Bereken de tijd tot DOM interactief is (in ms)
    const loadTime = Math.round(perf.domInteractive);
    
    const counterElement = document.getElementById('speed-counter');
    
    if (counterElement) {
        // Laat de tijd zien met een kleine vertraging voor effect
        setTimeout(() => {
            counterElement.innerText = `Geladen in ${loadTime}ms`;
        }, 500);
    }
});
