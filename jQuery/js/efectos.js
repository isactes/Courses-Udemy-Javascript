$(document).ready(function(){

    var caja = $("#caja");
    
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('fast', 1);
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo('fast', 0);
    });

    $("#todoenuno").click(function(){
      caja.slideToggle('fast');
    });

    //Animacion que se puede utilizar en jQuery
    $("#animar").click(function(){
      caja.animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: '100px'
        }, 'slow')
        .animate({
          borderRadius: '50%',
          textAling: 'center',
          marginTop: '30px'
        },'slow')
        .animate({
          marginButton: '100px',
          fontSize: '5rem'
        });
      caja.animate({
          marginLeft: '100px',
          fontSize: '60px',
          height: '300px',
          textAling: '50%'
          }, 'slow')
    });
});


//despues de la funcio de hide o show podemos meter efetos de velocidad de degradado 
//fast, normal, slow
/*$("#caja").hide('fast'); */

//fadeIn,fadeOut,fadeTo,toggle

/*$("#caja").fadeIn('fast'); 
  $("#caja").fadeOut('fast');  
*/
/*$("#caja").fadeTo('fast', 1);
  $("#caja").fadeTo('fast', 0);  
*/
/*
  $("#caja").toggle('fast');
  $("#caja").fadeToggle('fast');
  $("#caja").slideToggle('fast');
 */

