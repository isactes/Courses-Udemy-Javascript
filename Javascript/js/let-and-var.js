'use stric'
// pruebas de let y var 


//prueba de var
var numero = 67;
console.log(numero); // valor de 67

if(true){
        var numero = 8765;
        console.log(numero);// el valor seria 8765
}
console.log(numero);//el valor seria 8765

//prueba de let
var texto= "curso de js";
console.log(texto);//el valor va ser el mismo

if(true){
     let texto ="curso de js let"; 
     console.log(texto);//let
}

console.log(texto);// el js