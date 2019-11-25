function calc(x,y,operation) {
    let multiply = (a,b) => a * b;
    let devide = (a,b) => a  / b;
    let add = (a,b) => a + b;
    let subtract = (a,b) => a - b;
    
    
    switch (operation) {
        case 'multiply':
        return multiply(x,y);
        
        case 'devide':
        return devide(x,y);
        
        case 'add':
        return add(x,y);
        
        case 'subtract':
        return subtract(x,y);
         
    }
}


console.log(calc(5,5,'add'));
