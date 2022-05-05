'use strict'

//Switch

var edad = 27;
var imprimir = "";

switch(edad){
    case 18:
        imprimir = "acabas de ser adulto";
    break;
    case 27:
        imprimir = "eres un chavo ruco";    
    break;
    case 40:
        imprimir = "ya vas para fosil";
    break;  
    case 55:
        imprimir = " ya eres anciano";
    break;
    default:
        imprimir = " no hay edad";
    break;
}
console.log(imprimir)