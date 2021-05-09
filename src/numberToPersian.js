const decimalSuffixes = require('./localization/decimalSuffixes')
const letters = require("./localization/letters")
const prepareNumber = require("./utils/prepareNumber")
const tinyNumToWord = require("./utils/tinyNumToWord")
/**
 *
 * @type {string}
 */
const delimiter = ' و ';

/**
 *
 * @type {string}
 */
const zero = 'صفر';

/**
 *
 * @type {string}
 */
const negative = 'منفی ';

/**
 * Convert Decimal part
 * @param decimalPart
 * @returns {string}
 * @constructor
 */
const convertDecimalPart = (decimalPart) => {
    // Clear right zero
    decimalPart = decimalPart.replace(/0*$/, "");

    if (decimalPart === '') {
        return '';
    }

    if (decimalPart.length > 11) {
        decimalPart = decimalPart.substr(0, 11);
    }
    return ' ممیز ' + numberToPersian(decimalPart) + ' ' + decimalSuffixes[decimalPart.length];
};

/**
 * Main function
 * @param input
 * @returns {string}
 * @constructor
 */
const numberToPersian = (input) => {
    // Clear Non digits
    input = input.toString().replace(/[^0-9.-]/g, '');
    let isNegative = false;
    const floatParse = parseFloat(input);
    // return zero if this isn't a valid number
    if (isNaN(floatParse)) {
        return zero;
    }
    // check for zero
    if (floatParse === 0) {
        return zero;
    }
    // set negative flag:true if the number is less than 0
    if (floatParse < 0) {
        isNegative = true;
        input = input.replace(/-/g, '');
    }

    // Declare Parts
    let decimalPart = '';
    let integerPart = input;
    let pointIndex = input.indexOf('.');
    // Check for float numbers form string and split Int/Dec
    if (pointIndex > -1) {
        integerPart = input.substring(0, pointIndex);
        decimalPart = input.substring(pointIndex + 1, input.length);
    }

    if (integerPart.length > 66) {
        return 'خارج از محدوده';
    }

    // Split to sections
    const slicedNumber = prepareNumber(integerPart);
    // Fetch Sections and convert
    const out = [];
    for (let i = 0; i < slicedNumber.length; i += 1) {
        const converted = tinyNumToWord(slicedNumber[i]);
        if (converted !== '') {
            out.push(converted + letters[4][slicedNumber.length - (i + 1)]);
        }
    }

    // Convert Decimal part
    if (decimalPart.length > 0) {
        decimalPart = convertDecimalPart(decimalPart);
    }

    return (isNegative ? negative : '') + out.join(delimiter) + decimalPart;
};

//@deprecate
String.prototype.toPersianLetter = function () {
    return numberToPersian(this);
};

//@deprecate
Number.prototype.toPersianLetter = function () {
    return numberToPersian(parseFloat(this).toString());
};

String.prototype.numberToPersian = function () {
    return numberToPersian(this);
};

Number.prototype.numberToPersian = function () {
    return numberToPersian(parseFloat(this).toString());
};

module.exports = numberToPersian