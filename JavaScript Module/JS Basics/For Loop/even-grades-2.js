function evenGrades2(input) {
    let n = Number(input.shift());
    let current = 1;

    for (let i = 1 ; i <= n ; i+= 2) {
        console.log(current);
        current = current * 4;
    }
}

evenGrades2([10]);