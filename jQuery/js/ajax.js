$(document).ready(function(){
    
    //Load
    $("#datos").load("https://reqres.in/");

    //Get 

    $.get("https://reqres.in/api/users", {page:2}, function(response){
        response.data.forEach((element, index) => {
                $("#users").append("<li>"+element.id+"____"+element.first_name+"_____"+element.last_name+"____"+element.email+"</li>")
        });
    });

    //Post 

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            portfolio: $('input[name="web"]').val()
        };

            /*$.post($(this).attr("action"), usuario, function(response){
                    console.log(response);
            }).done(function(){
                alert("Usuario añadido");
            });*/

            $.ajax({
                type: 'POST',
                url: $(this).attr("action"),
                data: usuario,
                beforeSend: function(){
                    console.log("enviando usuario");
                },
                success: function(response){
                    console.log(response);
                },
                error: function(){
                    console.log("hay un error");
                },
                timeout : 2000
            });

            return false;
    }); 

});

