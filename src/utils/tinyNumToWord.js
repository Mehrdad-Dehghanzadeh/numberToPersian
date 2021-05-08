const letters = require("../localization/letters")

const delimiter = ' و ';

/**
 * convert 3tiny parts to word
 * @param {*} num
 * @returns { string | number }
 */

function tinyNumToWord(num) {
    // return zero
    if (parseInt(num, 0) === 0) {
        return '';
    }
    const parsedInt = parseInt(num, 0);
    if (parsedInt < 10) {
        return letters[0][parsedInt];
    }
    if (parsedInt <= 20) {
        return letters[1][parsedInt - 10];
    }
    if (parsedInt < 100) {
        const one = parsedInt % 10;
        const ten = (parsedInt - one) / 10;
        if (one > 0) {
            return letters[2][ten] + delimiter + letters[0][one];
        }
        return letters[2][ten];
    }
    const one = parsedInt % 10;
    const hundreds = (parsedInt - (parsedInt % 100)) / 100;
    const ten = (parsedInt - ((hundreds * 100) + one)) / 10;
    const out = [letters[3][hundreds]];
    const secondPart = ((ten * 10) + one);

    if (secondPart === 0) {
        return out.join(delimiter);
    }

    if (secondPart < 10) {
        out.push(letters[0][secondPart]);
    } else if (secondPart <= 20) {
        out.push(letters[1][secondPart - 10]);
    } else {
        out.push(letters[2][ten]);
        if (one > 0) {
            out.push(letters[0][one]);
        }
    }

    return out.join(delimiter);
}


module.exports = tinyNumToWord