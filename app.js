// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function asignarTextoElmento(elemento, texto){
    let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
}

// prueba
let listaDeAmigos= []
let imputAmigos = document.getElementById ("amigo")
let listaAmigos = document.getElementById("listaAmigos")
let resultadoGanador = document.getElementById ("resultado")
// console.log(listaAmigos);
function agregarAmigo(){
    if (imputAmigos.value== ""){
            alert("Por favor, ingresar un nombre valido");
    }
    listaDeAmigos.push(imputAmigos.value);
// console.log(listaDeAmigos);
    listaAmigos.innerHTML += `<li>${imputAmigos.value}</li>`; 
}


function sortearAmigo() {
        let numeroRamdom = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSecreto = listaDeAmigos[numeroRamdom];
        resultadoGanador.innerHTML = `<li> Tu amigo secreto es: ${amigoSecreto}</li>`; 
}

asignarTextoElmento("h1" , "JUEGO ELECCIÓN DEL AMIGO SECRETO")
asignarTextoElmento("h2" , "Coloque EL NOMBRE de los jugadores")