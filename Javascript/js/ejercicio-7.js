'use strict'

//tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("de que numero quieres la tabla", 1));


document.write("<h3> Tabla del "+numero+" </h3>");
for(var i = 1; i <= 10; i++){
    document.write(i+"x"+numero+"= "+(i*numero)+"</br>"); 
}


//todas las tablas de multiplicar 

 for(var c = 1; c <= 10; c++){
     document.write("<h3> Tabla del "+c+"</h3>");
     for(var i = 1; i <= 10; i++){
         document.write(i+"x"+c+"="+(i*c)+"</br>")
     }
 }