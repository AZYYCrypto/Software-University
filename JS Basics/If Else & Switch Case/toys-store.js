function toyShop(input) {
    let excursionPrice = Number(input.shift());
    let puzzle = Number(input.shift());
    let talkingDoll = Number(input.shift());
    let teddyBear = Number(input.shift());
    let minion = Number(input.shift());
    let truck = Number(input.shift());
    
    let sum = (puzzle * 2.6) + (talkingDoll * 3) +
    (teddyBear * 4.1) + (minion * 8.2) + (truck * 2);

    let sumToys = puzzle + talkingDoll + teddyBear + minion + truck;

    let discount = 0.0;
    if (sum >= 50) {
        discount = sum * 0.25;
    } 

    let totalPrice = sum - discount;
    totalPrice = totalPrice - (totalPrice * 0.10);

    if (excursionPrice <= totalPrice) {
        let result  = totalPrice - excursionPrice;
        console.log(`Yes! ${result.toFixed(2)} lv left. `)
    } else {
        let result = Math.abs(excursionPrice - totalPrice);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed. `)
    }
}

toyShop([320,8,2,5,5,1])