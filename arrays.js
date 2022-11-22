// JS es demasiado flexibles, los arreglos no son de un solo tipo, ya veo porque es reocomendable usar TypeScript
let games = ['Yakuza 0', 'Yakuza Kiwami', 'Yakuza Kiwami 2', 'Yakuza 3', 'Yakuza 4', 'Yakuza 5', 'Yakuza 6 : Song of Life', 'Yakuza 7 : Like a Dragon'];

console.log(`La saga Yakuza tiene ${games.length} juegos.`);

// foreach
games.forEach((value, index) => {
    let message = `Value : ${value}, Index : ${index}`;
    console.log(message);
});  

// Inserta uno o varios elementos al final del arreglo y regresa la nueva longitud del arreglo
let newLength = games.push('Judgement');

// Inserta uno o varios elementos al principio del arreglo y regresa la nueva longitud del arreglo
 let newLength1 = games.unshift("Shenmue");

 // Eliminar el ultimo elemento del arreglo y regresarlo
 var deletedElement = games.pop();

 // elimina varios elementos en el arreglo en un rango determinado y como resultado regresa un nuevo arreglo
 var newGames = games.splice(0, 1);

// Encuentra el indice de un elemento del arreglo, si no se encontro regresa -1
let yakuza0Index = newGames.indexOf("Yakuza 0");
