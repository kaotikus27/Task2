var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
}
// Function to convert a string to uppercase
function toUpperCase(input) {
    return input.toUpperCase();
}
// Function to convert a string to lowercase
function toLowerCase(input) {
    return input.toLowerCase();
}
// Function to capitalize the first letter of a string
function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
// Function to count the number of characters in a string
function countCharacters(input) {
    return input.length;
}
// Function to count the number of words in a string
function countWords(input) {
    return input.trim().split(/\s+/).length;
}
// Function to trim leading and trailing whitespace
function trimWhitespace(input) {
    return input.trim();
}
// Function to check if a string is a palindrome
function isPalindrome(input) {
    var cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// Function to replace characters in the string (asks for user input for replacement)
function replaceCharacters(input, find, replace) {
    return input.split(find).join(replace);
}
// Function to find a substring within the input string (asks for user input for substring)
function findSubstring(input, substring) {
    return input.includes(substring);
}
// Function to convert a string to title case
function toTitleCase(input) {
    return input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
// Function to remove vowels from a string
function removeVowels(input) {
    return input.replace(/[aeiouAEIOU]/g, '');
}
// Function to check if a string contains any numbers
function containsNumbers(input) {
    return /\d/.test(input);
}
// Get elements
var inputString = document.getElementById('inputString');
var output = document.getElementById('output');
// Attach event listeners to buttons
(_a = document.getElementById('reverseBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    output.textContent = reverseString(inputString.value);
});
(_b = document.getElementById('upperBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    output.textContent = toUpperCase(inputString.value);
});
(_c = document.getElementById('lowerBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    output.textContent = toLowerCase(inputString.value);
});
(_d = document.getElementById('capitalizeBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    output.textContent = capitalizeFirstLetter(inputString.value);
});
(_e = document.getElementById('countCharsBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    output.textContent = "Character count: ".concat(countCharacters(inputString.value));
});
(_f = document.getElementById('countWordsBtn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    output.textContent = "Word count: ".concat(countWords(inputString.value));
});
(_g = document.getElementById('trimBtn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    output.textContent = trimWhitespace(inputString.value);
});
(_h = document.getElementById('palindromeBtn')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
    var isPalin = isPalindrome(inputString.value) ? 'is a palindrome' : 'is not a palindrome';
    output.textContent = "".concat(inputString.value, " ").concat(isPalin);
});
(_j = document.getElementById('replaceBtn')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
    var find = prompt('Enter character to replace:') || '';
    var replace = prompt('Enter replacement character:') || '';
    output.textContent = replaceCharacters(inputString.value, find, replace);
});
(_k = document.getElementById('substringBtn')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () {
    var substring = prompt('Enter substring to search for:') || '';
    var found = findSubstring(inputString.value, substring) ? 'found' : 'not found';
    output.textContent = "Substring \"".concat(substring, "\" was ").concat(found);
});
(_l = document.getElementById('titleCaseBtn')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', function () {
    output.textContent = toTitleCase(inputString.value);
});
(_m = document.getElementById('removeVowelsBtn')) === null || _m === void 0 ? void 0 : _m.addEventListener('click', function () {
    output.textContent = removeVowels(inputString.value);
});
(_o = document.getElementById('checkNumbersBtn')) === null || _o === void 0 ? void 0 : _o.addEventListener('click', function () {
    var hasNumbers = containsNumbers(inputString.value) ? 'contains numbers' : 'does not contain numbers';
    output.textContent = "".concat(inputString.value, " ").concat(hasNumbers);
});
