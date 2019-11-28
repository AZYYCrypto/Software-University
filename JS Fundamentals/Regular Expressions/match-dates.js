let text = 'I am born on 30-Dec-1994. My father is born on the 9-Jul-1955. 01-July-2000 is not a valid date';
let pattern =  /\d{1,2}-\w{3}-\d{4}/g;
let result = text.match(pattern);
console.log(result);


