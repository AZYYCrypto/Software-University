function charityCampaign(input) {
    let countDays = Number(input[0]);
    let countSweet = Number(input[1]);
    let countCakes = Number(input[2]);
    let countWaffles = Number(input[3]);
    let countPancakes = Number(input[4]);

    let cakesFor1Days = countCakes * 45;
    let wafflesFor1Days = countWaffles * 5.80;
    let pancakesFor1Days = countPancakes * 3.20;
    let sumFor1Day = (cakesFor1Days + wafflesFor1Days +pancakesFor1Days ) * countSweet;
    let amountForWholeCampaign = sumFor1Day * countDays;
    let finalSum = amountForWholeCampaign - amountForWholeCampaign / 8;

    console.log(finalSum);
    


}
