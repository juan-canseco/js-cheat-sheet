// funcion basica, es preferible declararla con let y const por los problemas que trae var consigo
function greeting() {
    console.log('Hello, World');
}
var greeting = 'Saludar';


// Funcion anonima
const multiply = function(a, b) {
    // los argumentos que le pasas a una funcion, solo en las funciones declaradas explicitamente con func
    console.log(arguments);
    return a * b;
}

// funcion flecha
const sum = (a, b) => {
    return a  + b;
}

// lambda funcion 1 linea
const sum2 = (a,b) => a + b;




