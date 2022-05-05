'use strict'

//una coleccion de datos de una variables 

var nombre = "Isac ";
var nombres = ["ISAC", "FIDEL", "ALE", " MIME", 54, true];
var lenguajes = new Array("JS", "c++", "JAVA");
var colores = ["RED", "GREEN", "WHITE", "BLACK"];



console.log(nombres);// se manda todos los caracteres de tu array 
console.log(lenguajes);
console.log(nombres[3]);// se selecciona en especifico el numero de mi array se inicia de 0
console.log(colores[2]);

//Arrays 

var elemento = parseInt(prompt("que elemento del array deseas?", 0));

if(elemento >= nombres.length){
    alert("introduce un numero menor que: "+nombres.length);
}else{
    alert("El usuario seleccionado es..."+nombres[elemento]);
}


//arrays lenguajes mostrar todos los elementos 
document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

//arrays de colores
document.write("<h2>Colores comunes</h2>");
document.write("<ul>");

colores.forEach((element, indice, arr) => {
    console.log(arr);
    document.write("<li>"+indice+" - "+element+"</li>");
});

document.write("</ul>");


//busquedas 


//una busqueda 
lenguajes.find(function(lenguaje){
    return lenguaje== "c++";
});   

//otroa manera 

var precios = [10, 20, 29, 30];
//var busqueda = lenguajes.find(lenguaje => lenguaje == "c++");
console.log(busqueda);

var busqueda = precios.some(precio => precio < 10);