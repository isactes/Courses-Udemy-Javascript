'use strict'


// Utilizando un bucle, para mostrar suam y la media de los numeor introducidos hasta introducir un numero negativo y mostrar resultado

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce un numero que sea negativo Animal:", 0));
    if(isNaN(numero)){
        numero = 0;
    }else  if(numero >= 0){
        suma = suma + numero;
        // suma += numero

        contador++;
    }
    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert("la sumade los numeros es:" + suma);
alert("la media de todos los numeros es:" + (suma/contador));

