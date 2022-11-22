// si un dato no es un primitivo es un objeto de una 
let hero = {
    name: 'Ichiban Kasuga',
    codeName :  'Ichi',
    greet : () => {
        console.log('Hola, los objetos literales pueden ser tan simples o tan complejos como los necesites');
    }
};
// elimina la propiedad de un objeto literal
delete hero.greet;
console.log(hero);

// Usar un objeto literal como si fuera un arreglo
// regresa un arreglo con pares de valores
const heroArray = Object.entries(hero);
console.log(heroArray);


// crear una nueva propiedad en tiempo de ejecucion
hero.age = 44;
console.log(hero);

// Crear objeto literal inmutable
// si es un objeto anidado tendras que hacerle freeze tambien para garantizar su inmutabilidad
var newHero = {
    name : 'Endeavor'
};
Object.freeze(newHero);
newHero.data = 'hola';
console.log(newHero);

// Obtener el nombre de las propiedades de un objeto
var properties = Object.getOwnPropertyNames(hero);
console.log(properties);

// Obtener los valores de un objeto
var values = Object.values(hero);
console.log(values);