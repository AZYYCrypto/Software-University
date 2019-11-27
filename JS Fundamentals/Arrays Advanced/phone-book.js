const names = ['Tim','Peter','Bill','Tim'];

const phones = ['023131','1231231','3124132','349807'];

function telephoneBookThem(names,phones) {
    const telephoneBook = {};

    for (const name of names) {
        const index = names.indexOf(name);
        const phone = phones[index];

        telephoneBook[name] = phone;
    }

    for (const name in telephoneBook) {
        const phone = telephoneBook[name];

        console.log(`${name} -> ${phone}`);
        
    }
}

telephoneBookThem(names,phones)