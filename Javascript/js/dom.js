'use strict'

//DOM documen object model 

function cambiacolor(color){
    caja.style.background = "red";
}
//CONSEGUIR ELEMENTOS CON UN ID CONCRECO

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML= " Quite el lorem";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.fontFamily = "arial";
caja.style.color = "blue";
caja.className = "caja caja2";

console.log(caja);

//CONSEGUIR ELEMENTOS POS SU ETIQUETA

var alldivs = document.getElementsByTagName('div');
//var text = alldivs[2];
//text.innerHTML= "Cambio el Div"
//text.style.float = "rigth";
//text.style.background = "blue"
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
var valor;
for (valor in alldivs) {
    
    if(typeof alldivs[valor].textContent == 'string' ){
     var parrafo = document.createElement("p");
     var texto =  document.createTextNode(alldivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
};
seccion.append(hr);

//CONSEGUIR ELEMENTOS POR SU CLASE CSS
var divred = document.getElementsByClassName('rojo');
var divyellow = document.getElementsByClassName('yellow');
var div;

divyellow[0].style.background = 'yellow';
for(div in divred){
    if(divred[div].className == "rojo"){
        divred[div].style.background = 'red';
    }
}

//QUERY SELECTOR 
var id = document.querySelector("#miseccion");
console.log(id);

var divreds = document.querySelectorAll('.rojo');
    divreds[1].style.background = "white";

console.log(divreds);


