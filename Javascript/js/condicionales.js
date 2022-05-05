'use stric'

//condicional if

//Condicional una estructura de control o unas instrucciones que no va a permitir a comparar algo 

var edad1 = 30;
var edad2 = 12;

if( edad1 > edad2){
     console.log("Edad 1 es mayor que edad 2")
}else{
    console.log("La edad 1 es inferior")
}

//operadores
/*
Mayor: >
Menor: <
Mayor igual: >=
Menor igual: <=
Igual: ==
Distinto: !=
igual estricto: ===
Estrictp distinto: !==
*/
var edad  = 31;
var nombre = 'Isac Renovato';

if( edad >= 18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if(edad <= 30){
        console.log("Todavia eres milenian")
    }else if(edad >= 70){
        console.log("ya eres un anciano")
    }else {
        console.log("ya no eres milenian")
    }
}else {
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

//Epradores logicos
/*
AND(Y): &&
OR(O): ||
NEGACION: !
*/

var yera = 2021;
//negacion 
if(yera != 2018 ){
    console.log(" el año no es 2018, realmente es:"+yera);
}

//and 
if(yera >= 2000 && yera <= 2021){
    console.log("Estamos en la era actual");
}else{
    console.log("estamos en el futuro");
}

//or 
if(yera == 2020 || (yera == 2021 && yera == 2029)){
    console.log("si el año acaba en 0 ")
} else{
    console.log("no hemos llegado al año")
}


