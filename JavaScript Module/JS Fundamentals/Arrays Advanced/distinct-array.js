function distinctArray(input) {
    let disctictArr = [];

    for (let i = 0; i < input.lenght; i++) {
        let indexOfEl = input.indexOf(input[i]);

        if (i === indexOfEl) {
            disctictArr.push(input[i]);
        }
    }

    console.log(disctictArr.join(' '));
    
}


distinctArray([7,8,9,7,2,3,4,1,2]);