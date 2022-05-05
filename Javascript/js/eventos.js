'use strict'

//eventos del raton

window.addEventListener('load', () =>{
    function cambiarColor(){
        console.log("Me has dado click");
    
        var bg = boton.style.background;
        if (bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        
        boton.style.padding= "10px";
        boton.style.border=  "1px solid #ccc";
        return true;
    }
    
    var boton =  document.querySelector ("#boton");
    
    //click
    boton.addEventListener('click', function(){
        cambiarColor();
    }); 
    
    //mouse over hover
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });
    
    //muse out 
    boton.addEventListener('mouseout', function(){
        boton.style.background = "purple";
    });
    
    //Focus
    var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus', function(){
        console.log ("[focus]dentro del input");
    });
    //Blur 
    input.addEventListener('blur', function(){
        console.log ("[blur]fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', function(event){
        console.log ("[Keydown]pulsa esta tecla", String.fromCharCode (event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress', function(event){
        console.log ("[Keypress]tecla presionada", String.fromCharCode (event.keyCode));
    });
    //Keyup
    
    input.addEventListener('keyup', function(event){
        console.log ("[Keyup]tecla soltada arriba", String.fromCharCode (event.keyCode));
    });
}); //end load 

