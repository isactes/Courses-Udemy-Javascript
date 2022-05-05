'use strict'

window.addEventListener('load', function(){
    console.log("Dom cargado");

    var formulario =  document.querySelector("#formulario");
    var box_dashed = this.document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento Submit capturador");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("Introdusca el nombre");

            document.querySelector("#d_nombre").innerHTML = "Escriba el nombre";
            return false;
        }else{
            document.querySelector("#d_nombre").style.display = "none";
        }


        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Introdusca los apellidos");
            return false;
        }

        console.log(edad);
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("Intruduse tu edad");
            return false;
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

    });
})

//console.log(nombre, apellidos, edad); para mostrar 

        /* se puede mostrar de esta manera haciendo un for para un bucle
        var datos_usuarios = [nombre, apellidos, edad];
        var indice

        for(indice in datos_usuarios){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);
        }*/

        

        //parrafo.append(nombre); se tenia mas conteplado por uno por uno y se realizo con un bluque con for 
        //parrafo.append(apellidos);
        //parrafo.append(edad);
        //box_dashed.append(parrafo);