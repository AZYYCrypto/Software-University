function solve(num) {
    var str = String(num);
    var sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(str[i]);

    }

    var result = String(sum).includes('9');
    console.log(`${num} Amazing ? ${result ? 'True' : 'False'}`);

    
}

solve(1233);