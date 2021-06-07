function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = length * width * height;
    let totalLiters = volume * 0.001;
    let procent = percentage * 0.01;
    let total = totalLiters * (1 - procent);

    console.log(total);
}
