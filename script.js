// Control de salto de ventana vertical con animación de transición fluida
function mostrarVentanaVertical(paneId, btnElem) {
    var ventanas = document.querySelectorAll('.fer-window-pane');
    for (var i = 0; i < ventanas.length; i++) {
        ventanas[i].classList.remove('active');
    }

    var botones = document.querySelectorAll('.fer-v-btn');
    for (var j = 0; j < botones.length; j++) {
        botones[j].classList.remove('active');
    }

    var objetivo = document.getElementById(paneId);
    objetivo.classList.add('active');
    btnElem.classList.add('active');
}