'use strict'

//hace una calcualdora 
//pida los numeros por pantalla, si ingresa uno mal que lo vuelva a pedir, en el cuerpo de la pagina una alerta y por la consola el resultado de + - * / de esas sifras


var numero1 = parseInt(prompt("ingresa el primer numero: ", 0));
var numero2 = parseInt(prompt("ingresa el segundo numero: ", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("ingresa el primer numero: ", 0));
    numero2 = parseInt(prompt("ingresa el segundo numero: ", 0));
}

var resultado = "la suma es: "+(numero1+numero2)+"</br>"+
                "la multiplicacion es: "+(numero1*numero2)+"</br>"+                   
                "la resta es: "+(numero1-numero2)+"</br>"+
                "la division es: "+(numero1/numero2)+"</br>";
var resultadoalert = "la suma es: "+(numero1+numero2)+"\n"+
                "la multiplicacion es: "+(numero1*numero2)+"\n"+                   
                "la resta es: "+(numero1-numero2)+"\n"+
                "la division es: "+(numero1/numero2)+"\n";
document.write(resultado);
alert(resultadoalert);
 console.log(resultado);  