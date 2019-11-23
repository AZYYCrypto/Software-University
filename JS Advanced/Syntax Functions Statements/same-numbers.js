function calc (num){
   let arrayOfNumber = String(num).split("");
   let isSame = true;
   let firstElement = arrayOfNumber[0];

   arrayOfNumber.forEach(function (element) {
       if (element != firstElement) {
           isSame = false;
           
       }
       
   });


   let sum = arrayOfNumber
   .map(Number)
   .reduce((acc, cur) => acc + cur);

   console.log(isSame);
   console.log(sum);

}

calc(2222222)