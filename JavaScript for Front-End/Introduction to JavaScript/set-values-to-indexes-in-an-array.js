function setValues(arr) {
    let arrLenght = Number(arr[0]);
    let array = new Array(arrLenght).fill(0);

    for (let i = 1; i < arr.lenght; i++)  {
        let tokens = arr[i].split(' ');
        let index = tokens[0];
        let value = tokens[2];
        array[index] = value;
    }

    for (number of array) {
        console.log(number);
        
    }
}

setValues(['3','0-5','1-6','2-7']);