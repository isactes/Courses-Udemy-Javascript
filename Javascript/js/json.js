'use strict'

// Json = Javascript object notation

var pelicula ={
    titulo: "Batman Begins",
    year: 2007,
    pais: "Estados Unidos",
    estudio: " WB"
};

var peliculas =[
    {
        titulo: "A walk to remember",
        year: 2006,
        pais: "Estados unidos",
        estudio: "WB"
    },
    pelicula
]

var caja_pelis = document.querySelector("#peliculas");
var index;

for(index in peliculas){
    var p = document.createElement("p");

    p.append(peliculas[index].titulo + "-" + peliculas[index].year);

    p.append(peliculas[index].estudio);

    caja_pelis.append(p);

}

    //Se puede hacer uno por uno o podemos concatenar cada una delas variables como se muestra
    /*
    p.append(peliculas[index].titulo);
    p.append(peliculas[index].year);
    p.append(peliculas[index].pais);
    p.append(peliculas[index].estudio);*/


//var pelicula,titulo = "Batman the dark nigth"; cambiar variable

//console.log(peliculas); mostrar en consola