// Activity one

// regular expression : match all occurrences of word javascript in the string

let str =
  "I love to learn JavaScript, but it is hard to grasp. JavaScript is my favorite programming language. since 2024";
let regex = /javascript/gi;
let matches = str.match(regex);

console.log(matches);

// task 2 : find digit in the string
let str1 = "I have 10 apples, 20 oranges, and 30 bananas";
let regex1 = /\d+/g;
let matches1 = str1.match(regex1);

console.log(matches1);

//Activity 2 :

//  character class and quantifier
const str2 = "Hello World! This is a Test String with Some Capitalized Words.";
const regex2 = /\b[A-Z][a-z]*\b/g;
const matches2 = str2.match(regex2);
console.log(matches2);

// task 4

const str3 = "My roll number is 3, from 1 st class 3 is like a lucky number.";
const regex3 = /\d+/g;

const matches3 = str3.match(regex3);
console.log(matches3);

// task 5

const phoneNumber = "(123) 456-7890";
const regex4 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches4 = phoneNumber.match(regex4);

if (matches4) {
  const areaCode = matches4[1];
  const centralOfficeCode = matches4[2];
  const lineNumber = matches4[3];

  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found.");
}

// task 6

let email = "pritamawatade.work@gmail.com";
// write a regular expression to extract the domain name and username form this email id

let regex5 = /([\w-]+)\@([\w-]+)\.([\w]+)/;
let matches5 = email.match(regex5);

if (matches5) {
  let username = matches5[1];
  let domain = matches5[2];
  let extension = matches5[3];

  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
  console.log(`Extension: ${extension}`);
} else {
  console.log("No match found.");
}

const inputString = "Hello, world! How are you?";
const wordToMatch = "Hello";

regex = new RegExp(`^${wordToMatch}\\b`, "i");
matches = inputString.match(regex);

if (matches) {
  console.log(`Found a match: ${matches[0]}`);
} else {
  console.log("No match found.");
}

str = "This is a test string with a word at the end";
regex = /\b\w+\b$/;
matches = str.match(regex);
console.log(matches); // Output: ["end"]

let pass = "Sss&&&777?";
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

matches = pass.match(passwordPattern);
console.log(matches);
function validateURL(url) {
  const urlPattern =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return urlPattern.test(url);
}

// Example usage:
console.log(validateURL("https://www.example.com")); // true
console.log(validateURL("http://example")); // false
console.log(validateURL("www.example.com")); // false
console.log(validateURL("example.com")); // true
