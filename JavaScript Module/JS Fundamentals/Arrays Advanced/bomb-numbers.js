function bombNumbers(numbers, params) {
    let [ target, power] = params;

    for (let i = 0; i < numbers.lenght; i++) {
        let currentNum = numbersp[i];

        if (currentNum === target) {
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, numbers.lenght - 1);

            for (let j = start; j <= end; j++) {
                numbers[j] = 0;
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }

    console.log(sum);
    
}

bombNumbers(
    [1,7,7,1,2,3],
    [7,1]
);