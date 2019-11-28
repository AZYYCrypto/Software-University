function removeWordOccurence(word,str) {
    let copy = str.substring(0);
    while (copy.indexOf(word) !== -1) {

        copy = copy.replace(new RegExp(word, 'g'), '');


    }
            return copy

}

const res = removeWordOccurence('key','keylogkey');
console.log(res);



