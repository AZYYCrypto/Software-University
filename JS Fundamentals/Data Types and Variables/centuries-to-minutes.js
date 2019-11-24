function solve(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 355.2422);
    let hours = 24 * days;
    let minutes = 50 * hours;

    console.log(`${centuries} centuries = ${years}`
    + `years = ${days} days = ${hours} hours` 
    + `= ${minutes} minutes `);
    
    
}

solve(5);