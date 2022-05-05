'use strict'

// localstorage Es una memoria dentro de nuestro navegador verificar compatibilidad 

//Comprobar disponibilidad en el local storage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("localstorage no disponible");
}

//guardar datos en el localstorage

localStorage.setItem("Titulo", "Daft Punk-Touch");

// Recuperar datos 
//console.log(localStorage.getItem("Titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

//guaradar datos 
var usuario = {
    nombre: "Isactes",
    email: "email@gmail.com",
    web: "Isactesweb.mx"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperal informacion

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" "+userjs.nombre+" "+userjs.email);

//(borrar objectos en localstorage) localStorage.removeItem("usuario");

localStorage.clear(); 