const nums = [3, 4, 5, 7, 8];

function elementFirstLast(arr) {
    let k = arr.shift();
    const firstElement = arr.slice(0,k);
    const lastElement = arr.slice(arr.length-k,);

    console.log(firstElement);
    console.log(lastElement);
        
}

elementFirstLast(nums);