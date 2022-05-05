'use strict'

//Fetch (Ajax) y peticiones a servicios / apis rest

// paginas de fake Apis https://reqres.in/api/users / https://jsonplaceholder.typicode.com/users


/*var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + " " + user.first_name + "" + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none'
        });
    });*/


//Fetch hacer promesas  para determinar solo un elemento 
//Peticiones asincronas con Fetch y promesas

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");
var usuarios = [];


    getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo(); 
    })
    .then(data => {
        div_profesor.innerHTML = data; 
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        alert("error en las peticiones");
    })
    


    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }
    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo () {
        var profesor = {
            nombre: 'Isac',
            apellidos: 'Renovato',
            url: 'https://isac-portfolio.netlify.app'
        };

        return new Promise ((resolve, reject) => {
            var profesor_string = "";
            
            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);

                if(typeof profesor_string != 'string' || profesor_string == '') return reject('error isac');

                return resolve(profesor_string); 
            }, 5000);

        });
    };


    function listadoUsuarios(usuarios){
        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + " " + user.first_name + "" + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none'
        });
    }
    function mostrarJanet(user){
        
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + "" + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '150';
        avatar.height = '150';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display = 'none'
        
    }