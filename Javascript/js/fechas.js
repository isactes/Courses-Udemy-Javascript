var fecha = new Date();

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour = fecha.getHours();

var textoHora = `
    EL año es: ${year}
    EL mes es: ${month}
    El dia es: ${day}
    La hora es:${hour}
` ;

console.log(textoHora);