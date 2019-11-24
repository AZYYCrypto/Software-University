function printAndSum(x,y) {
    let outputNumbers = "";
    let totalSum = 0;

    for (let i = x; i <= y; i++) {
        outputNumbers += `${i}`;
        totalSum += i;

        
    }


    console.log(outputNumbers);
    console.log(`Sum : ${totalSum}`);
    
    
    
}


printAndSum(9,19)