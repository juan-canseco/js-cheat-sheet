// Funcion que se ejectura inmediatamente despues de ser creada para el patron modulo
// al hacer esto se crea un nuevo scope aislado del exterior
// hay dos formas para crear un funcion modulo la cual es 
/*****
 * 
 * Metodo 1 
 * (() => {
 * 
   })();
 * 
   Metodo 2
 * (function() {

   })();
 * *****/

// Module Pattern
const HelloService = (() => {
    'use strict'
    const hello = () => {
        console.log("Hello Word");
    }
    return {
        hello: hello
    }
})();



