'use strict'

/*
1° pida 6 numeros por pantalla y los meta en un array
2° mostrar el array entero (todos los elemnetos) en el cuerpo de la pagina y en la consola 
3°ordenarlo y mostrarlo 
4° invertir su order y mostrarlo
5° mostrar cuantos elementos tiene el array
6°busqueda de una calor introducido que nos diga si lo encuentra y su indice 
*/

function mostrarArray (elementos, textocustom = ""){
    //MOSTRAR EN EL CUERPO DE LA HTML
    document.write("<h1> Contenido del arrya"+textocustom+ "<h1/>");
    document.write("<ul>")
    elementos.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>");
});
    document.write("<ul/>");

}

//1
//PEDIR NUMEROS
//var numero = new Array(6);
var numeros = [];
for(var i = 0; i <= 5; i++){
    //numero[i] =parseInt(prompt("introduce un numero"));
    numeros.push(parseInt(prompt("introduce numeros", 0)));
}
//mostrar el cuerpo de los numeros
mostrarArray(numeros);

//MOSTRAR ARRAY EN LA CONSOLA 
console.log(numero); 

//3 ordernar y mostrar

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordernado');

//4 invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertidos' );

//contar elementos
document.write(numeros.length);

//usuario busqueda

var busqueda = parseInt(prompt("busqueda numeros", 0));

var buscado = numeros.findIndex(numero => numero == busqueda);

if(buscado && buscado != 1){
    document.write("encontrado");
    document.write("posocion de la busqueda: "+posicion);
}else{
    document.write("no encontrado");
}



