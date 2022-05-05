'use stric'

alert("tipos de datos");
// operadores 
var numero1 = 9876;
var numero2 =1223;
var operacion_suma = numero1 * numero2;

    alert("el resultado de la operacio suma es;"+ operacion_suma);

//tipos de datos 
// los tipos de datos son el entero, string o la cadena de texto o de caracteres la coma floante o el decimal o el buleano que es un true o false, los arrays y los objectos

var numero_entero = 44;
var cadena_texto ="esto es una cadena de texto"
var cadena_texto_comillas = 'se puede asi con comillas simples' + "o asi con comillas dobles";
var verdareo =  true;
var falso = false; 

// funcion number es cuadno se puede utilizar para reaccinar una cadena de texto que es un string a un numero para concatenar y asi poder hacer una operacion  


var numero_falso = "3456";
console.log(Number(numero_falso)+2343);
// con la funcion parseInt lo va acombertir a un no numero pero en este caso se puede ser un numeor flotante o un numero decimal y en se combierte a un numero entero
var numer_falso_2 = "123435" ;
console.log(parseInt(numer_falso_2)+12345);
// funcion parsefloat que nos permite  convertir  un numero  a un numero decimal 
var numero_falso_3 = "14.98";
console.log(parseFloat(numero_falso_3)+234);
//se puede utilizar un string tambien se puede ser de una variable a un texto 
console.log(String(numero_entero)+9976);

// con el typeoff  nos devuel el dato de nuestra variables de cual sea

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof cadena_texto_comillas);
console.log(typeof verdareo);
console.log(typeof falso);

// ejemplo de operadores con el libro 
var subtotal = (13 + 1) * 5; // Subtotal es 70
var shipping = 0.5 * (13 + 1); // Shipping es 7
var total = subtotal + shipping; // total ies 77

var elsub = document.getElementById('subtotal');
elsub.textContent = subtotal;

var elship = document.getElementById('shipping');
elship.textContent = shipping;

var eltotal = document.getElementById('total');
eltotal.textContent = total;
