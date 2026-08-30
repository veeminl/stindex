document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        // 如果焦点在输入框或文本域中，不切换
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable) {
            return;
        }

        // 切换 dark-mode 类
        document.body.classList.toggle('dark-mode');

        // 保存当前模式
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
    }
});