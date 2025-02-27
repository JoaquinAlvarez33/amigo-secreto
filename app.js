document.addEventListener('DOMContentLoaded', function () {
    let amigos = [];

    function agregarAmigo() {
        let nombre = document.getElementById('amigo').value; // Asegúrate de que el id en el input sea 'amigo'
        if (nombre === '') {
            alert('Debe ingresar un nombre');
            return;
        } else {
            amigos.push(nombre);
            document.getElementById('amigo').value = ''; // Limpia el campo de entrada
            console.log(amigos);
        }
    }

    function sortearAmigo() {
       
    }
    
    // Aquí asignamos el evento del botón 'Añadir' a la función
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    // Aquí asignamos el evento del botón 'Sortear amigo' a la función
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});
