// helpers.ts

export const setupNavbarToggle = (): void => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar && close && nav) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });

        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    } else {
        console.error('One or more required elements not found');
    }
};