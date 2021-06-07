function fruitMarket(input) {
    let priceStrawberries = Number(input[0]);
    let bananasQuntity = Number(input[1]);
    let orangesQuntity = Number(input[2]);
    let rausberiesQuntity = Number(input[3]);
    let strawberriesQuntity = Number(input[4]);

    let rausberiesPrice = priceStrawberries / 2;
    let orangesPrice = rausberiesPrice * 0.60;
    let bananaPrice = rausberiesPrice * 0.20;

    let strawberriesTotalPrice = priceStrawberries * strawberriesQuntity;
    let rausberiesTotalPrice = rausberiesPrice * rausberiesQuntity;
    let orangeTotalPrice = orangesPrice * orangesQuntity;
    let bananaTotalPrice = bananaPrice * bananasQuntity;


    let total = strawberriesTotalPrice + rausberiesTotalPrice + orangeTotalPrice + bananaTotalPrice;

    console.log(total);

}