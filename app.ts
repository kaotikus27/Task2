// Function to reverse a string
function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Function to convert a string to uppercase
function toUpperCase(input: string): string {
    return input.toUpperCase();
}

// Function to convert a string to lowercase
function toLowerCase(input: string): string {
    return input.toLowerCase();
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

// Function to count the number of characters in a string
function countCharacters(input: string): number {
    return input.length;
}

// Function to count the number of words in a string
function countWords(input: string): number {
    return input.trim().split(/\s+/).length;
}

// Function to trim leading and trailing whitespace
function trimWhitespace(input: string): string {
    return input.trim();
}

// Function to check if a string is a palindrome
function isPalindrome(input: string): boolean {
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// Function to replace characters in the string (asks for user input for replacement)
function replaceCharacters(input: string, find: string, replace: string): string {
    return input.split(find).join(replace);
}

// Function to find a substring within the input string (asks for user input for substring)
function findSubstring(input: string, substring: string): boolean {
    return input.includes(substring);
}

// Function to convert a string to title case
function toTitleCase(input: string): string {
    return input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// Function to remove vowels from a string
function removeVowels(input: string): string {
    return input.replace(/[aeiouAEIOU]/g, '');
}

// Function to check if a string contains any numbers
function containsNumbers(input: string): boolean {
    return /\d/.test(input);
}

// Get elements
const inputString = document.getElementById('inputString') as HTMLInputElement;
const output = document.getElementById('output') as HTMLDivElement;

// Attach event listeners to buttons
document.getElementById('reverseBtn')?.addEventListener('click', () => {
    output.textContent = reverseString(inputString.value);
});

document.getElementById('upperBtn')?.addEventListener('click', () => {
    output.textContent = toUpperCase(inputString.value);
});

document.getElementById('lowerBtn')?.addEventListener('click', () => {
    output.textContent = toLowerCase(inputString.value);
});

document.getElementById('capitalizeBtn')?.addEventListener('click', () => {
    output.textContent = capitalizeFirstLetter(inputString.value);
});

document.getElementById('countCharsBtn')?.addEventListener('click', () => {
    output.textContent = `Character count: ${countCharacters(inputString.value)}`;
});

document.getElementById('countWordsBtn')?.addEventListener('click', () => {
    output.textContent = `Word count: ${countWords(inputString.value)}`;
});

document.getElementById('trimBtn')?.addEventListener('click', () => {
    output.textContent = trimWhitespace(inputString.value);
});

document.getElementById('palindromeBtn')?.addEventListener('click', () => {
    const isPalin = isPalindrome(inputString.value) ? 'is a palindrome' : 'is not a palindrome';
    output.textContent = `${inputString.value} ${isPalin}`;
});

document.getElementById('replaceBtn')?.addEventListener('click', () => {
    const find = prompt('Enter character to replace:') || '';
    const replace = prompt('Enter replacement character:') || '';
    output.textContent = replaceCharacters(inputString.value, find, replace);
});

document.getElementById('substringBtn')?.addEventListener('click', () => {
    const substring = prompt('Enter substring to search for:') || '';
    const found = findSubstring(inputString.value, substring) ? 'found' : 'not found';
    output.textContent = `Substring "${substring}" was ${found}`;
});

document.getElementById('titleCaseBtn')?.addEventListener('click', () => {
    output.textContent = toTitleCase(inputString.value);
});

document.getElementById('removeVowelsBtn')?.addEventListener('click', () => {
    output.textContent = removeVowels(inputString.value);
});

document.getElementById('checkNumbersBtn')?.addEventListener('click', () => {
    const hasNumbers = containsNumbers(inputString.value) ? 'contains numbers' : 'does not contain numbers';
    output.textContent = `${inputString.value} ${hasNumbers}`;
});
