function smartLili(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money;
    let moneyYears = 0;
    let toyYears = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyYears++;
        } else {
            toyYears++;
        }
    }
    for (let i = 1; i <= moneyYears; i++) {
        money += 10 * i;
        
    }
    money += (toyYears * toyPrice) - moneyYears;

    let dif = Math.abs(washingMachinePrice - money);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${dif.toFixed(2)}`);
    } else {
        console.log(`NO! ${dif.toFixed(2)}`);
    }

}


smartLili([10,170,5]);