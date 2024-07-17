//Activity one
for(let i = 1; i<=10; i++) {
    console.log(i);
}
for(let i = 1; i<=10; i++) {
    console.log("5 x "+i+" "+5*i);
}

//Activity two
let a = 1;
let c = 0;
while(a <= 10) {
    
    c +=a;
    a++;
    
}

console.log("Addition = "+c);


console.log("From 10 to 1");
let f = 10;
while(f <= 10)
    {
        if(f == 1)
            {
                console.log(f);
                break
            }
    console.log(f);
    f--;
}

//Activity three

let q =1;
console.log("From 1 to 5");
do{
    console.log(q);
    q++;
}
while(q <= 5);

let factorialNumber = 4;
let count = 1;
let fact = 1;
 do{
    fact *= count;
    count++;
 }while(count <= 4);
 console.log("\nFactorial = "+fact);

 //Activity four
 
    for (let i = 1; i <= 5; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }

//Activity 5

console.log("loop to contiue when number is 5");
for(let i = 1; i<=10; i++) {
    if(i==5){
        continue
    }
    console.log(i);
}
console.log("loop to stop when number is 7");
for(let i = 1; i<=10; i++) {
    if(i==7){
        break
    }
    console.log(i);
}
