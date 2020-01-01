const sentenceWithCurseWords = 'This is shit code';

const censoredWord = sentenceWithCurseWords.replace('shit', '*'.repeat(4));
console.log(censoredWord);
