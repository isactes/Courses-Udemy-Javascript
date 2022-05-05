'use stric'

//Que no diga que un numero es par o impar 
//1: ventana promt
// si no es valido que nos pida de nuevo el numero

var number = parseInt(prompt("introduce un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("introduce un numero", 0));
}

if(number%2 == 0){
    alert("es un numero par");
}else{
    alert("es impar");
}