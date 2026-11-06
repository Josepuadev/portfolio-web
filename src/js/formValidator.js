export function initContactForm () {
    const form = document.querySelector('.contacto--form');
    if (!form) return;

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const data = new FormData(form);
        const asunto = `Contacto de ${data.get('nombre')}`;
        const cuerpo = 
            `Nombre: ${data.get('nombre')}\n` +
            `Correo: ${data.get('correo')}\n\n` +
            `${data.get('detalles')}`;

        window.location.href = 
            `mailto:josemiguelpualopez@gmail.com` +
            `?subject=${encodeURIComponent(asunto)}` +
            `&body=${encodeURIComponent(cuerpo)}`;

    });
}