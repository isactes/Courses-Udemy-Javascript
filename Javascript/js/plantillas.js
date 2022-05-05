'use strict'

//Plantilla de texto en JS

var nombre = prompt("Ingresa un nombre: ");
var apellidos = prompt("Ahora los Apellidos: ");

//var completo = "El nombre es ... "+nombre+"<br/> apellidos... "+apellidos;
 
var texto =
    "<h1>Mi nombre es</h1>"+"<h2>Mi nombre es ${nombre}</h2>"+"<h2>Mi nombre es ${apellidos}</h2>";
document.write(texto);

