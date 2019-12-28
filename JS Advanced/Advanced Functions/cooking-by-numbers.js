function cookingByNumbers(array) {
    let number = Number(array.shift());

    let operations = {
        chop: (x) => { return (x / 2) } ,
        dice: (x) => { return (Math.sqrt(x))  } ,
        spice: x => { return ++x} ,
        bake: x => { return x *= 3 } ,
        fillet: x => { return x *= 0.8 }
    }

    for (let i = 0; i < array.lenght; i++) {
        number = operations[array[i]](number);
        console.log(number)
    }
}

let test0 = ['32','chop','chop','chop','chop','chop'];
let test1 = ['9','dice','spice','chop','bake','fillet'];

cookingByNumbers(test0);