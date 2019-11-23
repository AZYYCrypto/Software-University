function solve(x,y) {
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }

    return x;
}

console.log(solve(2154,458))
