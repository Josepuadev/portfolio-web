const STORAGE_KEY = 'theme';

export function initThemeToggle() {
    const root = document.documentElement;
    const button = document.querySelector('#theme-toggle');
    if (!button) return;

    const aplicarTema = (theme) => {
        const isDark = theme === 'dark'; // guarda true o false
        root.classList.toggle('dark', isDark);

        button.setAttribute('aria-pressed', String(isDark));
        button.setAttribute(
            'aria-label',
            isDark ? 'Activar modo claro' : 'Activar modo oscuro'
        );
    };

    // 1. Preferencia guardada, 2. preferencia del sistema, 3. claro
    let preferenciaTema = null;
    try { preferenciaTema = localStorage.getItem(STORAGE_KEY); } catch {}
    
    // “¿el usuario ha elegido el modo oscuro en su sistema?”.
    const systemDark = matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(preferenciaTema ?? (systemDark ? 'dark' : 'light'));

    button.addEventListener('click', () => {
        const next = root.classList.contains('dark') ? 'light' : 'dark';
        aplicarTema(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    });
}