document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const result = document.getElementById('result');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'RESET') {
                expression = '';
                result.value = '';
            } else if (value === 'DEL') {
                expression = expression.slice(0, -1);
                result.value = expression;
            } else if (value === '=') {
                try {
                    expression = eval(expression);
                    result.value = expression;
                } catch {
                    result.value = 'Error';
                }
            } else {
                expression += value;
                result.value = expression;
            }
        });
    });

    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeSwitch.checked = true;
        body.classList.add('dark-theme');
    } else {
        themeSwitch.checked = false;
        body.classList.remove('dark-theme');
    }
});
