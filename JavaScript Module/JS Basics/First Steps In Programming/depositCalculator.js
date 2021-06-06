function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let delayOfDeposit = Number(input[1]);
    let yearProcent = Number(input[2]);
    
    let interestRate = depositAmount * (yearProcent / 100);
    let interestFor1mounth = interestRate / 12;
    let totalSum = depositAmount + delayOfDeposit * interestFor1mounth;

    console.log(totalSum);

}
