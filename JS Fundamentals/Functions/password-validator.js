function solve(password) {
    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;

    let validLength = hasValidLenght();
    let validContent = hasValidContent();
    let validDigits = hasAtleastTwoDigits();

    if (!validLength) {
        console.log('Password must be between 5 and 10 characters');
    }

    if (!validContent) {
        console.log('Password must consist only of letters and digits');
        
    }

    if (!validDigits) {
        console.log('Password must have at least 2 digits');
        
    }

    if (validLength && validContent && validDigits) {
        console.log('Password is valid');
        
    }

    function hasValidLenght() {
        return password.length >= 5 && password.length <= 10;
    }

    function hasValidContent() {
        let lowercasePass = password.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode >= 122;

        for (let i = 0; i < lowercasePass.length; i++) {
            let ascii = lowercasePass.charCodeAt(i);

            if (isLetter(ascii) || isDigit(ascii)) {
                continue;
            }


            return false;
        }

        return true;
    }

    function hasAtleastTwoDigits() {
        let digitsCount = 0;

        for (let i = 0; i < password.length; i++) {
            let ascii = password.charCodeAt(i);

            let asciiIsDigits = isDigit(ascii);

            if (asciiIsDigits) {
                digitsCount++;
            }
        }

        return digitsCount >= 2;
    }
}
solve('logIn');
console.log('------------------------------------------');
solve('MyPass123');
console.log('------------------------------------------');
solve('Pa$s$s');