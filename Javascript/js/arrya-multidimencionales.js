'use strict'

//array dentros de otros arrays 

var categorias = ["terror", " comendia", "romance", "accion"];
var peliculas = ["la vida es bellla", " un paseo para recordar", "el gran torino"];
var cine = [categorias, peliculas];

peliculas.sort();//los acomoda ordenadamente alfabeticamente 
peliculas.reverse();//los acomoda de final al inicio 

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*
var elemento  =prompt("Introduce una pelicula");

while(elemento != "acabar"){
    elemento =  prompt("introduce tu pelicula");
    peliculas.push(elemento);
}
*/
//peliculas.pop();
//peliculas.pop();
//peliculas.pop();

var indice = peliculas.indexOf("el gran torino");

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peli_string = peliculas.join();
console.log(peli_string);
//peliculas[0] = undefined;

console.log(peliculas);

//cadenas array

var cadena = "the last of us";
var cadena_arrays = cadena.split(", ");

console.log(cadena_arrays);

