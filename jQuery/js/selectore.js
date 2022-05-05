'use strict'

/*$ (document).ready(function(){
    console.log("Ya esta jQuery");
});*/


//Selcetor ID con jQuery
$(document).ready(function(){

    $("#rojo").css("background", "red")
                        .css("color", "yellow");

    $("#amarillo").css("background", "yellow")
                .css("color", "green");
    
    $("#verde").css("background", "green")
                .css("color", "white");

    //Selectores de clases

    var clase = $('.uno');

    $('.dos').click(function(){
        console.log("Click dado");
        $(this).addClass('uno');
    });

    //Selectores de etiqueta

    var parrafos = $('p').css("cursor", "pointer");

     parrafos.click(function(){

        var that = $(that);
         if(!(that).hasClass('grande')){
            that.addClass("grande");
         }else{
              that.removeClas('grande');
         }
     });

    //Selectores de atributos

    $('[title="Google]').css('backgroung', 'green');
    $('[title="Anime"]').css('backgroung', 'blue');

    //Otros

     //$('p,a').addClass('margen-top');

     var busqueda = $('#element1').parent().parent().find('.element2');
     console.log(busqueda);
});