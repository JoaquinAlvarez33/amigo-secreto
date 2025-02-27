// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");  //visualizar la lista de amigos
const ulResultado = document.getElementById("resultado"); //visualizar el resultado del sorteo
const listaAmigos = []


 function agregarAmigo(){
    if(!inputAmigo.value){ //validar que el input no esté vacío
        alert("Debes ingresar un nombre");
        return;
    }else{
            listaAmigos.push(inputAmigo.value);
            ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; //visualizar el amigo en la lista
        } 
 
  }  
  
  function sortearAmigo(){

    if(listaAmigos.length === 0){ //validar que haya amigos en la lista
        alert("No hay amigos en la lista");
        return;
    }else{
            const random = Math.floor(Math.random() * listaAmigos.length);
            const amigoSecreto = listaAmigos[random];
             ulResultado.innerHTML = `<li>${amigoSecreto}</li>`;
             ulListaAmigos.innerHTML = "";
             listaAmigos.length = 0
         }     
}

function reiniciarSorteo(){
    ulResultado.innerHTML = "";
    ulListaAmigos.innerHTML = "";
    listaAmigos.length = 0;
}