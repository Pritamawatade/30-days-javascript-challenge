
// Activity one
let num = 10
if(num == 0) {
    console.log(num+"is a 0")
}
else if(num <0)
    console.log(num+"is nagtive ")
else{
    console.log(num+"is a positive number")

}
let age = 19
if(age <18) {
    console.log("Person is not eligble for voting")
}
else{
    console.log("Person is  eligble for voting")

}
// Activity 2
let firstnumber = 10
let secondnumber = 13333333333
let thirdnumber = 14

if(firstnumber > secondnumber) {
    if(firstnumber > thirdnumber) {
        console.log("First number is greater")
    }
    else
    console.log("third number is greater")
        
    
}
if(secondnumber > thirdnumber) {
    if(secondnumber > firstnumber) {
        console.log("second number is greater")
    }
    
}

// Activity 3
let daynum = 3

switch(daynum){
    case 1: console.log("It's monday");    break;
    case 2: console.log("It's Tuesday");  break;
    case 3: console.log("It's Webnday");  break;
    case 4: console.log("It's Thirday");  break;
    case 5: console.log("It's Friday");  break;
    case 6: console.log("It's Sataurday");  break;
    case 7: console.log("It's Sunday");  break;
}  


// Activity 4

let score = 75
let grade = ""
switch(score){
    case score > 85 : grade = "A"; break;
    case score > 75 : grade = "b"; break;
    case score > 55 : grade = "c"; break;
    case score > 45 : grade = "d"; break;
    case score < 35 : grade = "f"; break;
}

let num1 = 7

let result = num1  %2 ? "odd" : "Even";
console.log(result)

let year = 2016


if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Not a leap year")
} else {
    console.log(" a leap year")

}
