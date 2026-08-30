document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable) {
            return;
        }
        document.documentElement.classList.toggle('dark-mode');
        const isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
    }
});