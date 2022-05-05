$(document).ready(function(){
    //Mover elemento 
    $('.elemento').draggable();

    //Redimencionar
    $('.elemento').resizable();

    //Sleccionar elemntos
    //$('.lista-selc').selectable();
    $('.lista-selc').sortable({
        update: function(event, ui){
            console.log("cambio")
        }
    });

    //drop
    $('#element-move').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("algo dentro")
        }
    });

    //efectos

    $('#mostrar').click(function(){
        $('.box-efect').toggle("explode", 4000);
    });
});