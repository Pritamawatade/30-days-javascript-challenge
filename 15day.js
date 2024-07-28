// clousures 
// Activty one 

    function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            return outerVariable + innerVariable;
        }
    }

    let outerResult = outerFunction(5);
    console.log(outerResult(100));

    // clousure ot main private varivble 

    function outerfun(){
        let privateVar = 10;
        function increment(incrementValue){
            return privateVar + incrementValue;
        }

        function decrement(decrementValue){
            return privateVar - decrementValue;
        }

        return {
            increment: increment,
            decrement: decrement
        }
    }

const mainVar = outerfun();

console.log(mainVar.increment(5));

console.log(mainVar.decrement(2));

// Activity two

function createUniqueIdGenerator() {
    let lastId = 0;

    // Inner function (closure) to generate a new unique ID
    function generateUniqueId() {
        lastId++; // Increment the ID
        return `ID_${lastId}`; // Return the formatted ID
    }

    return generateUniqueId; // Return the inner function
}

const getNextUniqueId = createUniqueIdGenerator();

console.log(getNextUniqueId()); 
console.log(getNextUniqueId()); 
console.log(getNextUniqueId()); 


function greetuser(user){

    
    function greet(){
        return 'hello '+user;

    }
    return {
        greet: greet
    }
}

const greetUser = greetuser('john');

console.log(greetUser.greet()); 

// Activity three

function arrayOfFunctions(length){
    let funcs = []
    for(let i=0; i<length; i++){
        funcs[i] = function(){
            return i;
        }
    }
    return funcs;
}

const arrayOfFuncs = arrayOfFunctions(5);

console.log(arrayOfFuncs.map((funs) => funs()))

// Activity four

function createItemManager() {
    const items = []; 
    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function listItems() {
        return items.slice(); 

    }

    return {
        addItem,
        removeItem,
        listItems
    };
}

// Usage
const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.addItem('Cherry');

console.log(itemManager.listItems()); // ["Apple", "Banana", "Cherry"]

itemManager.removeItem('Banana'); 
console.log(itemManager.listItems()); // ["Apple", "Cherry"]


// Activity five
function createMemoizedFactorial() {
    const cache = {}; // Private cache to store results

    function factorial(n) {
        if (n <= 1) {
            return 1;
        }

        if (cache[n]) {
            // Return cached result if available
            return cache[n];
        }

        // Calculate and store the result
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }

    return factorial; // Return the memoized function
}

const memoizedFactorial = createMemoizedFactorial();

console.log(memoizedFactorial(5)); // Example: 120 (5!)
console.log(memoizedFactorial(5)); // Example: 120 (5!)
console.log(memoizedFactorial(10)); // Example: 3628800 (10!)



