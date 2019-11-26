function sortedBy2Criteria(input) {
    let sorted = input.sort(sortNames);
    console.log(sorted.join('\n'));

    function sortNames(a, b) {
        let firstCriteria = a.lenght - b.lenght;

        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }

        return firstCriteria;
    }
}

sortedBy2Criteria(
    ['Isacc','Theodor','Jack','Harrison','George']
);