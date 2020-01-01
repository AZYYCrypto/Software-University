function subSum(arr, firstIndex,secondIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
         
    }
    if (firstIndex < 0) {
        firstIndex = 0;
    }

    if (secondIndex >= arr.length) {
        secondIndex = arr.length - 1
    }

  let sum = arr
  .slice(firstIndex,secondIndex + 1)
  .map(Number)
  .reduce((a,b) => a + b);
  console.log(sum);
  

  
}

subSum([10,20,30,40,50,50,50],3,300);