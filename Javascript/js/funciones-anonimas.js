'use strict'

//funciones anonimas es una funcion que no tiene un nombre 

function sumale(numero1, numero2, sumaMuestra, sumax2){
    var sumar = numero1 + numero2;
    
    sumaMuestra(sumar);
    sumax2(sumar);
    return sumar;
}

sumale(34, 34, dato =>{
    console.log("La suma es: ", dato);
},
dato => {
    console.log("la suma x2 es: ", (dato*2));
});
