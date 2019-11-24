function rouding(number,precision) {
    
    if (precision > 15) {
        precision = 15;
    }

    let output = parseFloat(number.toFixed(precision));
    console.log(output);
    
}

rouding(3.14000000,4);