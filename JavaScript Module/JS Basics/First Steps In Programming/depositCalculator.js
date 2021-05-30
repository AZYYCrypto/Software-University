function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let delayOfDeposit = Number(input[1]);
    let yearProcent = Number(input[2]);
    
    let interest = depositAmount * yearProcent;
    let interestFor1mounth = interest / 12;
    let totalSum = depositAmount + (delayOfDeposit * interestFor1mounth);

    console.log(totalSum);

}

depositCalculator(["200","3","5.7"])