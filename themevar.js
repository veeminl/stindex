(function() {
            var savedMode = localStorage.getItem('theme-mode');
            if (savedMode === 'dark') {
                document.documentElement.classList.add('dark-mode');
            }
        })();