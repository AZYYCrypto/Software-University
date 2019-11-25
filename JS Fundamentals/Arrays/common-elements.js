function solve(arrX,arrY) {
    for (let i = 0; i < arrX.length; i++ ) {
        let currentEl = arrX[i];

        for(let j = 0 ; j < arrY.length; j++){
            let nextEl = arrY[i];

            if (currentEl === nextEl) {
                console.log(currentEl);
                
            }
        }
    }
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Peter', 10, 'hey', 4, 'hello', '2']
);