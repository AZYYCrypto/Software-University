function solve(jsonStr) {
    

    Object
    .entries(JSON.parse(jsonStr))
    .forEach(tuple => console.log(tuple.join(': ')));
    
        

    
}

solve('{"name": "Georgi", "age": 40, "town": "Sofia"}');