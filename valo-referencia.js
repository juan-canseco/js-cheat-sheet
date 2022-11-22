// primitivos funcionan por valor, objetos por referencia
let a = 10;
let b = a;

a = 30;
console.log({a , b});



// Obetos por referencia
const createPerson = (name, age) => {
    return {
        name, 
        age
    }
}

let person = createPerson("Juan Canseco", 28);
let person2 = person;
person.age = 27;

console.log({person, person2});

// operador sprean para clonar objetos

const createHero = (name) => {
    return {
        name
    };
}

// clonar objetos con el operador spread
let hero = createHero("Endeavor");
let hero2 = { ...hero };
hero.name = "Todoroki";

console.log({hero, hero2});



// como clonar arreglos, operador spread, tambien se puede clonar con games.slice(), spread es un poco mas rapido
let games = ['Yakuza', 'Yakuza Kiwami'];
let yakuzaGames = [...games];

yakuzaGames[0] = 'Yakuza 0';

console.log({games, yakuzaGames});


