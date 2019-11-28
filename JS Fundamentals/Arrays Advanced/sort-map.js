const data = [['one', 1], ['three, 3'], ['minusFive', -5]];
const map = new Map (data);

const valuesOnly = 
[...map]

.sort((a,b) => a - b);;

for (const kvp of valuesOnly) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
    
}





