function solve(originalArr) {
    let modifiedArr = [];

    for (let i = 0 ; i < originalArr.length; i++) {
let currentEI = originalArr[i];

if (currentEI % 2 === 0) {
modifiedArr[i] = currentEI + i;

} else {
    modifiedArr[i] = currentEI - i;
}
    }

    console.log(modifiedArr);
    let originalArrSum = 0;
    let modifiedArrSum = 0;

    for (let index in originalArr) {
        let firstEI = originalArr[index];
        let secondEI = modifiedArr[index];

        originalArrSum += firstEI;
        modifiedArrSum += secondEI;
    }

    console.log(originalArrSum);
    console.log(modifiedArrSum);

    
    
}

solve([5,15,23,55,35]);
