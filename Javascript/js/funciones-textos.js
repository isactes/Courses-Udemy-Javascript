'use stric'

//transformaicon de texto

var numero = 234;
var textoone = "Aprendiendo JS";
var texttwo = "keep learning";

var dato = numero.toString();
    dato1 = textoone.toUpperCase(); //Texto en MAYUSCULAS
    dato2 = texttwo.toLowerCase();//textto en minusculas 
console.log(dato + dato1);

//Calcular longitud

var nombre = '';
//var nombre2 = ["Hola JS", "estoy aprendiendo JS"];
console.log(nombre.length);

//Cocatenar  - uni texto 
var keep = "No matter what,";
var it = "You keep finding something to fitgh for..."

var textoall = keep.concat(" "+it);

console.log(textoall);

//Metodos de busqueda de string

var busqueda = keep.indexOf("w");//busqeuda de tu palabra dentro de una variables
var busqueda2 =it.lastIndexOf("to");//busqueda de la ultima palabra
var busqueda3 = it.search("so");//busqueda en generarl
var busqueda4 = keep.match("tt");// devuelve un array, una coleccion de reultados que encuentre
var busqueda5 = keep.substr("12, 6");//Saca el intervalo de los caracteres
var busqueda6 = keep.charAt(15);//buscar una letra en conquetro
var busqueda7 = keep.startsWith("matter")// busca la palabra deseada del inicio y dice si esta o no con true or false
var busqueda8 = keep.endsWith("matter")// busca la palabra deseada del final y dice si esta o no con true or false
var busqueda9 = keep.includes("matter")//busca la palabra exacta con true or false


console.log(busqueda); 
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);


//funciones de reemplazo 
var reemplazo = 32;
var reemplazo1 = "No matter what..";
var reeemplzo2 = "you keep finding something to fitgh for";

var funcion = reemplazo1.replace("matter", "How");//hace una reemplazo de string por que pones
var slice = reeemplzo2.slice(10, 16);// te muestra solo los caracteses que pusistes que son en num
var split = reeemplzo2.split(" ");// se pone en array 
var trim = reemplazo2.trim(); //quitar o recortar los espacios por detras de mi string

console.log(funcion);
console.log(slice);
console.log(split);
console.log(trim);

