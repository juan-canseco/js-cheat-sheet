// Funcion que recuerda el ambito donde ha sido creado
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(10);
myMoneyBox(20);

const buildCount = (i) => {
    let count = i;
    const displayCount =() => {
        console.log(count++);
    }
    return displayCount; 
};


// Factory Like
const zoomOut = (size) => {
    return () => {
        document.body.style.fontSize = size + 'px';
    };
}

let sumOutBy16 = zoomOut(16);
let sumOutBy32 = zoomOut(32);
let sumOutBy48 = zoomOut(48);

// POO with closures
const person = (name, lastname, age) => {
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    return {
        getName: () => this.name,
        getLastName: () => this.lastName,
        getAge: ()=> this.age
    };
}