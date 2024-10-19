// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');

    const menuIcon = document.querySelector('.menu-icon');
    if (menu.classList.contains('show')) {
        menuIcon.textContent = '✖';  // Icono de cerrar
    } else {
        menuIcon.textContent = '☰';  // Icono de abrir
    }
}

// Función para el contador
function countdown() {
    const targetDate = new Date('Sep 1, 2025 00:00:00').getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown-timer').innerHTML = "¡Ya empezaron las fiestas!";
        }
    }, 1000);
}

// Llamada a la función del contador al cargar la página
window.onload = function () {
    countdown();
};
