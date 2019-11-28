function  solve(input) {
    let words = input
    .shift()
    .split(' ');

    let wordsCount = {};
    for (let word of words) {
        wordsCount[word] = 0;
    }

    for (let currentWord of input) {
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }

    let sordtedWords = Object.entries(wordsCount)
    .sort((firstPair,secondPair) => {
        let [ firstWord ,firstOccurence ] = firstPair;
        let [ secondWord ,secondOccurence ] = secondPair;

        return secondOccurence - firstOccurence;
    });

    for (let [ word, occurence ] of sordtedWords) {
        console.log(`${word} - ${occurence}`);
        
    }
}
const resultFromFunc = [
    'this sentence' ,'In','this','sentence','you','occurances','of','the','words','this','and','sentence','because','this','is','your','task'
];

solve(resultFromFucn);