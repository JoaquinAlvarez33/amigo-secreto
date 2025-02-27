# Sorteo de Amigos

Este proyecto permite gestionar una lista de amigos y realizar un sorteo para asignar un "amigo secreto" de manera aleatoria.

## Funcionalidad

1. **Agregar un amigo**: Permite agregar un nombre a la lista de amigos.
2. **Realizar un sorteo**: Selecciona aleatoriamente un amigo de la lista y muestra el resultado como el "amigo secreto".

## Estructura del Código

El código consta de tres partes principales:

- **Agregar un amigo**: 
  - Se valida que el input no esté vacío antes de agregar el nombre a la lista.
  - El nombre se agrega tanto a la lista interna (`listaAmigos`) como al HTML (en un `ul` con id `listaAmigos`).

- **Sorteo de un amigo secreto**:
  - Si hay al menos un amigo en la lista, se selecciona uno al azar y se muestra en un `ul` con id `resultado`.
  - Luego, se limpia la lista y el contenido del HTML de la lista de amigos.

## Uso

1. Ingresa un nombre en el campo de texto correspondiente y presiona el botón para agregar un amigo a la lista.
2. Para realizar el sorteo, presiona el botón de sorteo y el nombre del "amigo secreto" será mostrado.

## Requisitos

No se necesitan dependencias externas para este código. Solo HTML, CSS y JavaScript.

## Archivos

- `index.html` – Estructura básica del HTML.
- `script.js` – Código JavaScript que gestiona la lista de amigos y el sorteo.
