function calorieObject(array) {
    let obj = {};
    
    for (let i = 0; i < array.length; i +=2) {
        let element = array[i];
        let value = array[i + 1];

        obj[element] = value;
    }

    console.log(obj);
}
let test0 = ['Yoghurt',48,'Rise',138,'Apple',52];
let test1 = ['Pomato',93,'Skyr',53,'Cucumber',18,'Milk,42'];
calorieObject(test0);