    //Mouseover and Mouse
    var caja = $("#caja"); 
    
    caja.mouseover(function(){
        $(this).css("background", "purple");
    });

    caja.mouseout(function(){
        $(this).css("background", "blue");
    }); 
    

    function cambiomorado(){
        $(this).css("background", "purple");
    }

    function cambioazul(){
        $(this).css("background", "blue");
    }
    
    //Hoverhover
    caja.hover(cambiomorado, cambioazul);

    //Click y doble Click

    caja.dblclick(function(){
        $(this).css("background", "pink")
            .css("color", "yellow");
    });

    //focus y Blur 
    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border", "5px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "2px solid transparent");
        
        
        datos.text($(this).val()).show();
    });
    
    $("#target").blur(function(){
    alert("handler for .blur() called");
    });
    
    $("#other").click(function(){
    $("#target").blur();
    });

    //Mousedown y mouseup
    var datos = $("#datos");

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "pink"); 
    });

    //mousemove

    $(document).mousemove(function(){
        $('body').css("cursor", "none");
        
        $("#sigueme").css("left",event.clientX)
                     .css("top",event.clientY); 
    });



