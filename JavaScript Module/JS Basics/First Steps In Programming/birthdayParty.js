function birthdayParty(input) {
        let rentOfRoom = Number(input[0]);

        let priceOfCakes = rentOfRoom * 0.2;
        let priceOfDrinks = priceOfCakes - 0.45;

        console.log(priceOfDrinks);
}

birthdayParty(["2250"]);