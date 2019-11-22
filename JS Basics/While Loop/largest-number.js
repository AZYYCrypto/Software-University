function largestNumber(input) {
    let n = Number(input.shift());
    let count = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while (count < n) {
        let num = Number(input.shift());
        count++;
        if (num > max ) {
            max = num;
        }
    }
    console.log(max);
}

largestNumber([2,20,200]);