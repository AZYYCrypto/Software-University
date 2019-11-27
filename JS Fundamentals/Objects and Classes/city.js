function city(name,area,population,country,passCode) {

    const city = {
        name: name,
        area: area,
        population: population,
        country: country,
        passCode: passCode

    }



    for (const prop in city) {
        const value = city[prop];
        console.log(`${prop} -> ${value}`);

    }


}


city('Sofia','492', '1238438','Bulgaria','1000');








