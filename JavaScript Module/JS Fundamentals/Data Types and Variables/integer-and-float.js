function solve(x,y,z) {
    let sum = x + y + z;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
    
}


solve(9,100,1.1);