function train(input) {
    let wagons = input.shift().split(' ').map(Number);
  
    let maxCapacity = +input.shift();

for (const line of input) {
    let tokens = line.split(' ');

    if (tokens.length === 2) {
        let wagonPassagers = Number(tokens[1]);
        wagons.push(wagonPassagers);

    } else {
        let passagersCount = Number(tokens[0]);

        for (let i = 0; i < wagons.lenght; i++) {
            let currentCapacity = wagons[i];

            if (passagersCount + currentCapacity <= maxCapacity) {
                wagons[i] += passagersCount;
                break;
            }
        }
    }
}


    console.log(maxCapacity);
    console.log(input);
    

    
}

train([

    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'


]);