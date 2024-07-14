//Activity one Arithmatic operator:
// Task one 
let a = 121
let b = 111
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Activity two Assignment operator:

a += b
console.log(a)
a -= b
console.log(a)


//Activity three : Comparison operator

if(a > b)
    console.log(a+"is greater")
else( b> a)
    console.log(b+"is greater")

if(a >= b)
    console.log(a+"is greater or equal of a")
else( b >= a)
    console.log(b+"is greater or equal of a")

if(a == b)
    console.log("Bothe are smae")
else( b === a)
    console.log("both have similar datatype as well as value")

// Acitvity four : Logical operator

if(a==b && a==121)
    console.log("both condition are true")
else if(a===b || a > 10)
    console.log("Minimum one condition is true")
else(a != 10)
    console.log("a is not equal  to 10")

// Acitvity five
    let number = 10; 

    let result = number > 0 ? 'Positive' : 'Negative';
    console.log(result);