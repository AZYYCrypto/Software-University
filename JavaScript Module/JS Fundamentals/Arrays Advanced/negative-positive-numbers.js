
    const numbers = ['11','123','-5'];
    
    function sortNums(strArr) {

        const sortedNums = [];

        strArr.forEach((item) => {
            const num = Number(item);
            (num < 0) 
                ? sortedNums.unshift(num)
                : sortedNums.push(num);
 
        });
        return sortedNums.join('\n');
            
            }
         
        const sortedNumbers = sortNums(numbers)
    console.log(sortedNumbers);
    
