function areaOfFigures(input) {
    let figureType = input.shift();
    let area = 0.0;
    switch (figureType) {
        case 'square': {
            let a = input.shift();
            area = a * a;
            break;
        }
        case 'rectangle': {
            let a = input.shift();
            let b = input.shift();
            area = a * b;
            break;
        }
    }

    console.log(area.toFixed(3));   

}

areaOfFigures(['square' , 4 ]);