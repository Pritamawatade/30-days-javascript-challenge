//Activity one 
let arr = [1,2,3,4,5]
console.log(arr);
console.log(arr[0], arr[4]);

//Activity two
arr.push(6)

console.log(arr);
arr.pop();
console.log(arr);
arr.shift();

console.log(arr);
arr.unshift(1);

console.log(arr);
 
//Activity three
console.log("Activity three begin");
let arr2 = arr.map(i => i*2)
console.log(arr2);

let arr3 = arr.filter(i => i%2 == 0)
console.log(arr3);

let intinalvalue = 0
let arr4 = arr.reduce((i,j) => i+j, intinalvalue)
console.log(arr4);

//Activity four begin

for (let i = 0; i<arr.length; i++)
    console.log(arr[i]);
console.log("With foreach loop");
arr.forEach(i => console.log(i))

//Activity five begin
let twoDimArr = [[1,2,3],[4,5,6]]
console.log(twoDimArr);
console.log(twoDimArr[0][1]);
    