//Extract the last four characters in the string below;"extravaganza"
let a = "extravaganza";
let b = a.substring(8,12);
console.log({b});

// Insert the following string at the fourth index of the below variable:
// "eat"const food = "The quick fox jumped over the lazy dog"


const food = "The quick fox jumped over the lazy dog";
const string = food.slice(0,4) + "eat" + food.slice(4);
console.log({string});


// Count how many times the following string appears in the string variable:1. 
// "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const sentence ="The quik brown fox jumps over the lazy dog";
console.log( sentence.split("the").length);
console.log(sentence.split("brown".length));

// Using JavaScript, find the following words from the following strings:
// 1. "are"const string1 = "The pupils are reading in the library";2.
//  "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The puils are reading in the library";
const phrase = string1.search("are");
console.log({string1});


const string2 = "The child was sitting on the table before it fell";
const word = string2.search("sitting");
console.log({word});

// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"

let section = "wonderful";
let worda = section.toUpperCase();
console.log({worda});

let section2 = "amazing";
let wordb = section.toLowerCase();
console.log({wordb});

let section3 = "UndERneath";
let wordc = section.toLowerCase();
console.log({wordc});

let section4 = "A wonderful world"
let wordd = section4.toTitleCase();
console.log({wordd});
