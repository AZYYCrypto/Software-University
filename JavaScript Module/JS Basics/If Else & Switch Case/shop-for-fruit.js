function shopForFruit(input) {
    let fruit = (input.shift()).toLowerCase();
    let day = (input.shift()).toLowerCase();
    let quantity = Number(input.shift());

    let price = 0;

    if (day == 'monday' || day == 'tuesday' || day == 'wednesday'
    || day == 'thursday' || day == 'friday') {

        if (fruit == 'banana') {
            price = 2.50;
        }
        else if (fruit == 'apple') {
            price = 1.20;
        }

    }
    else if (day == 'saturday' || day == 'sunday')
        if (fruit == 'banana') {
            price = 2.70;
        }
    if (price > 0) {
        console.log(`${(price * quantity).toFixed(2)}`);
    }
    else {
        console.log('error');
    }
    
}

shopForFruit(['apple' , 'Tuesday' , 2]);