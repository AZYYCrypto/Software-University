function sumFirstLast(input) {
    
        const first = Number(input.shift());
        const last = Number(input.pop());

        console.log(first + last);
}

sumFirstLast(['12','123','55']);


