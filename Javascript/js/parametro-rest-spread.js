'use strict'

//parametros rest and spread

function lasfrutas(fruta1, fruta2, ...resto){
    console.log("1 Fruta: ", fruta1);
    console.log("2 Fruta: ", fruta2);
    console.log(resto);
}
    lasfrutas("narajan", "manzana", "Melon", "Fresa", "Sandia" );

//spread 

var frutas = ["Naranja", " manzana"];

lasfrutas( ...frutas, "Sandia", "Melon", "Pepino", "coco");