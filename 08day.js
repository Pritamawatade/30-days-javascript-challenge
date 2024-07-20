// Activity 1
let name =" Pritam"
let age = 20
let tString = `Name is ${name} and age is ${age}
And he is about to do some crazy shit
`

console.log(tString)

// Activity 2 
let arr2 = [1,2,3,4,5]

let [one , two] = arr2;

console.log(one, two)

let book = {
    title: "Think and grow rich",
    author: "Nepolian Hill",
    year: 1932
}

let {title, author} = book

console.log(title, author)

// Activity 3

let arr3 = [...arr2, 6,7]
console.log(arr3);

console.log("Rest operator");
function sumAll(...nums){
    let sum = 0;
    for (i in nums){
        
        sum += nums[i];
       
    }
    return sum
}
console.log(sumAll(1,2,4));

// Activity 4
console.log("Default parameters");
function product(val1, val2=4){
    return val1 * val2;
}

console.log(product(2,5));
console.log(product(2));

// Activity 5
console.log("Object litrals");
var a = 10
var dialog = "king of the pirates"

function greet(name, dialog){
    console.log(`Greetings, ${name}! You are ${dialog}`)
}

let pirat = {a,dialog , greet}
console.log(pirat.a,pirat.dialog);
console.log(pirat.greet);
