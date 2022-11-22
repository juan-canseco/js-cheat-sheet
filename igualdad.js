// https://www.oscarlijo.com/blog/diferencias-entre-y-en-javascript/
let a = 10;
let b = '10';

// Igualdad debil o abstracta == 
// en la igualdad debil se convierten los dos datos a un tipo comun y se evalua el contenido de los datos
// esto deberia regresar true
var data = a == b;
console.log(data);

// Igualdad estricta, fuerte o tambien se le llama identidad 
// en este tipo de igualdad solo dara verdadero si el tipo de dato es el mismo y el valor tambien
// Deberia de retornar falso
var data1 = a === b;
console.log(data1);