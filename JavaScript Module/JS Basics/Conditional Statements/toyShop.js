function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddybearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let sum = (puzzlesCount * 2.60) + (dollsCount * 3) +
        (teddybearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);

    let toysCount = puzzlesCount + dollsCount + teddybearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        sum = sum * 0.75;
    }

    let sumAfterRent = sum = sum * 0.9;

    if (sumAfterRent >= tripPrice) {
        console.log(`Yes! ${(sumAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - sumAfterRent).toFixed(2)} lv needed.`);
    }
}
