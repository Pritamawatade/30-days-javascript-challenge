//Activity one
function evenOrOdd(val) {
    if (val === undefined) return
    else{
        if(val %2 === 0) console.log(val + " is even");
        else {
            console.log(val+" is not odd");
        }
    }

}

evenOrOdd(7)

function squere(val){
    if(val <= 0){
        return
    }
    else{
        return val * val;
    }
}

let sq = squere(7)
console.log(sq);

// function expression

function maxOfTwo(a,b){
    if(a === b){
        console.log("both are some")
    }
    if(a > b) console.log(a+" is greater than "+b);
    else console.log(b+" is greater than "+a);
}

maxOfTwo(23,5)

function concat(str1 , str2)
{
    return str1 + str2
}
let str3 = concat("pritan", "awatade")

console.log(str3)

// arrow function

let sum = (a,b) => a + b
console.log(sum(3,4))

const containsCharacter = (inputString, targetChar) => {
    return inputString.includes(targetChar);
  };

  let str = "pritam"
  let ch = "a"

  const result = containsCharacter(str, ch);
  
//   console.log(`Does "${myString}" contain "${targetCharacter}"? ${result}`);
  
console.log(result);


// Activity four : function parameters and default parameters

function multiply(a,b=1){
    return a * b
}

console.log(multiply(5))

function greet(name,age=9){
    console.log("Hello, "+name+" your age is "+age)
}
greet("priam")

// Activity five : high order function  

function calling(fun,number)
{
    for(let i=0;  i<=number ; i++)
    {
        fun();
    }
}

const demo = () => console.log("hellow");

calling(demo,5)

function twoFuntion(fun1, fun2, val)
{
    let result1 = fun1(val);
   let result =  fun2(result1);

   return result;


}

let func1 = (x) => x+1;
let func2 = (x) => x+x;

twoFuntion(func1, func2, 12);




