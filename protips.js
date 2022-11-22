

// crear objeto literal, version reducida, cuando el nombre de la propiedad es el mismo que el del parametro, simplemente regresa la propiedad
const createHero = (name, age) => {
    return {
        name,
        age
    };
}

// crear objeto literal, version reducida con lambda
const createPerson = (name, age) => {name, age};


// destructuracion, solo obtengo la edad del objeto persona
let person = createPerson("Juan", 28);
const { age } = person;

// destructuracion cmabio de nombre variable
let person1 = createHero("pablo", 28);
const {name:myName} = person1;


// Argumentos funcion
function printArguments() {
    console.log(arguments);
}

// argumentos funcion de flecha
const printArguments = (age, ...args) => {

};

