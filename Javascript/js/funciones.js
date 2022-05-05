'use stric'
// una funcion es una agrupacion reutilizables de un conjunto de instrucciones 

// definir la funcion 

function calculadora (){
    //conjunto de insrucciones 
    console.log("Soy Calcualdora");
    console.log("que si soy la calculadora");
}
//llamar la fucion
calculadora();



//parametros
function Calculadora(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("**********Separacion***************");
}
//Calculadora(21, 54);
//Calculadora(1234,768);

for( var i = 1; i <= 10; i++ ){
    console.log(i);
    Calculadora(i, 6);
}


//parametros opcionales
function Calcualdora_1 (numero1, numero2, mostrar = false){
    if(mostrar == false){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("**********Separacion***************");
    }else{
    document.write("Suma: " + (numero1+numero2)+"</br>");
    document.write("Resta: " + (numero1-numero2)+"</br>");
    document.write("Division: " + (numero1/numero2)+"</br>");
    document.write("Multiplicacion: " + (numero1*numero2)+"</br>");
    document.write("**********Separacion***************");
    }
}
Calcualdora_1 (1,3);
Calcualdora_1(2,5, true);
Calcualdora_1(12, 32, true);


//funcion dentro de otras funciones 
function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("**********Separacion***************");   
}
function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2)+"</br>");
    document.write("Resta: " + (numero1-numero2)+"</br>");
    document.write("Division: " + (numero1/numero2)+"</br>");
    document.write("Multiplicacion: " + (numero1*numero2)+"</br>");
    document.write("**********Separacion***************");
}

function Calculadora_2 (numero1, numero2, mostrar = false){
    if( mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

Calculadora_2(12, 12);
Calculadora_2(2, 56, true);
Calculadora_2(3, 45, true);