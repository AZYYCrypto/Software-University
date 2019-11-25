function solve(a, b, c) {
    let sum = (x, y) => x + y;
    let subtract = (result, z) => result - z;

    let result = sum(a, b);
    console.log(subtract(result, c));
    
}

solve(23,5,10);