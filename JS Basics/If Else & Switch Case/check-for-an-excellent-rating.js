function isExcellent(input) {
    let grade = input.shift();
    if (grade >= 5.50) {
        console.log('Excellent!');
    }
    else {
        console.log('Error!')
    }
}

isExcellent([3])