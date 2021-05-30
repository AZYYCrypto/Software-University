function petShop(input) {
    let dogNumber = Number(input[0]);
    let numOtherAnimal = Number(input[1]);

    let  DogFood = dogNumber * 2.5;
    let Another = numOtherAnimal * 4;

    let totalSum = DogFood + Another;

    console.log(totalSum);
}

