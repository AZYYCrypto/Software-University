function aggragate(arr) {
    //Sum
    console.log('Sum = ' + arr.reduce((acc,c) => acc+c, 0));
    //Min
    console.log('Min = ' + Math.min(...arr));
    //Max
    console.log('Max = ' + Math.max(...arr))
    //Product
    console.log('Product = ' + arr.reduce((acc,c) => acc*c, 1));
    //Join
    console.log('Join = ' + arr.join(''));
    
}
const myArr = [2,3,10,5];
aggragate(myArr);
