function solve(firstArr,secondArr) {
    let thirtArr = []
    let length = firstArr.length;

    for (let i = 0; i < length; i++) {
        let firstEI = firstArr[i];
        let secondEI = secondArr[i];

        if (i % 2 === 0) {
            thirtArr.push(Number(firstEI) 
            + Number(secondEI));

        } else {
            thirtArr.push(firstEI + secondEI);
        }
    }

    console.log(thirtArr.join(' - '));
    
}

solve(
    ['5','15','23','55','35'],
    ['17','22','87','35','11']
);