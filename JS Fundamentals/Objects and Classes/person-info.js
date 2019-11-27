function personInfo(firstName,lastName,age) {
    
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    for (const prop in person ) {
        const value = person[prop];
        console.log(`${prop}: ${value}`);
        
    }
}

personInfo('Dimitar','Nenkov','19');