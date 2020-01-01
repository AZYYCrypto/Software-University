let text = 'valid123@abv.bg notvalid.abv.bg' ;

let pattern = /\w+@\w+\.\w+/g;
let result = text.match(pattern);
console.log(result);
