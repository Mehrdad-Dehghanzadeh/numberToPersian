/**
 * Clear number and split to 3 sections
 * @param {*} num
 */

function prepareNumber(num) {
    let out = num;
    if (typeof out === 'number') {
        out = out.toString();
    }

    //make first part 3 chars
    if (out.length % 3 === 1) {
        out = `00${out}`;
    } else if (out.length % 3 === 2) {
        out = `0${out}`;
    }
    // Explode to array
    return out.replace(/\d{3}(?=\d)/g, '$&*').split('*');
}

module.exports = prepareNumber