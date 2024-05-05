// Escuchar cambios en las casillas editables
document.querySelectorAll('.casilla[contenteditable="true"]').forEach(casilla => {
    casilla.addEventListener('input', () => {
        // Almacenar el valor ingresado en el atributo 'data-valor'
        casilla.setAttribute('data-valor', casilla.innerText.toUpperCase());
    });
});
