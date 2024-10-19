document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: [
            {
                title: 'Inauguración de las fiestas',
                start: '2025-09-01',
                description: 'Evento de apertura de las fiestas con música y fuegos artificiales.'
            },
            {
                title: 'Desfile de carrozas',
                start: '2025-09-05',
                description: 'Desfile tradicional por las calles del pueblo.'
            },
            {
                title: 'Concurso de disfraces',
                start: '2025-09-10',
                description: 'Concurso para elegir el mejor disfraz de la peña.'
            },
            // Más eventos de ejemplo
        ],
        eventClick: function (info) {
            var eventObj = info.event;
            document.getElementById('event-details').innerHTML =
                '<p><strong>' + eventObj.title + '</strong><br>' + eventObj.start.toDateString() + '<br>' + eventObj.extendedProps.description + '</p>';
        }
    });

    calendar.render();
    document.getElementById('loader').style.display = 'none'; // Ocultar el loader al cargar el calendario
});

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
