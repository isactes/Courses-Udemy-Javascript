'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor o menor o si son iguales 
*/

var numero_1 = parseInt(prompt("introduce tu primer numero Animal", 0));
var numero_2 = parseInt(prompt("Introduce tu segundo numero Animalx2", 0));

while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1) || isNaN(numero_2)){
    numero_1 = parseInt(prompt("introduce tu primer numero Animal", 0));
    numero_2 = parseInt(prompt("Introduce tu segundo numero Animalx2", 0)); 
}

if(numero_1 == numero_2){
    alert("los numeros son iguales");
}else if(numero_1 > numero_2){
    alert("el numero mayor es:" + numero_1);
    alert("el nuemor menor es:" + numero_2);
}else if (numero_2 > numero_1){
    alert("el numero mayor es:" + numero_2);
    alert("el numero menor es:" + numero_1);
}else {
    alert("escribe numeros Animal: " + " No seas ....");
}




