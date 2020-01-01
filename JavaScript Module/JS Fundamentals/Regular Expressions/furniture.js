function furniture(arr) {
    
    arr.forEach((line) => {
        const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]+)/g
        let result = pattern.exec(line);

        console.log(result);

    });
}

furniture([
    '>>Sofia<<312.21!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])