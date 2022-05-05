$(document).ready(function(){
    reloadlinks();

    $("#add_button")
        .removeAttr('disabled')//remuevo la clase y/o atributo que tenga mi id     
        .click(function(){
            $('#menu').append('<li><a href="'+$("#add_link").val()+'"><a/></li>');

            $("#add_link").val(''); 
            reloadlinks();
        });
});

function reloadlinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target', '_blank');
        
        that.text(enlace);
    });
};

// la funcion con callback para añadir elemntos desde el button incrustados en un imput se puede utilizar "html"
/* $("#add_button").click(function(){
        $('#menu').html('<li><a href="'+$("#add_link").val()+'"><a/></li>');
        reloadlinks();
    });*/

//la funcion "append" me lo agrega directamente a la lista que estoy requiriendo desde los id
/*$("#add_button").click(function(){
        $('#menu').append('<li><a href="'+$("#add_link").val()+'"><a/></li>');
        reloadlinks();
    }); */

//la funcion "prepend" lo añadi en para ser el primero
/*$("#add_button").click(function(){
        $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"><a/></li>');
        reloadlinks();
    }); */

//la funcion before me lo agrega fuera de la lista
/*$("#add_button").click(function(){
        $('#menu').before('<li><a href="'+$("#add_link").val()+'"><a/></li>');
        reloadlinks();
    });*/