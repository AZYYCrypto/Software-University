function solve(text) {
    let output = text[0];

    for (let i = 0; i < text.length; i++) {
        const current = text[i];
        const previous = text[i - 1];

        if (current !== previous) {
            output += current;
        }
    }

    console.log(output);
    
}

solve('aaaaabbbbbcdddeeeedssaa')