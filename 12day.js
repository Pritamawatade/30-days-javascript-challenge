const prompt = require("prompt-sync")();


//Acitity one : 
function errorHnd() {

    try {
        throw new Error('An error occurred!');
    } catch (error) {
        console.error(error.message);
    }
}

function devidebyzero() {
    let a = 2332;
    let b = 0;

    try {

        if (b == 0) {
            throw new Error('Cannot divide by zero!');
        }
        console.log(a / b);

    } catch (error) {
        console.error(error.message);
        return false;
    }
}
errorHnd();

devidebyzero();

//Acitvity two :

let age = 18;

try {
    if (age < 18) {
        throw new Error('You are not eligible to vote!');
    }
} catch (error) {
    console.error('You are eligible to vote!');
}
finally {
    console.log('You are awsome');

}

//Activity Three :

class CustomError extends Error {
    constructor(massage) {
        super(massage);
        this.name = 'CustomError';
        this.message = massage;
    }
}

function riskyOperation() {
    try {
        // Simulate an error condition
        throw new CustomError("Something went wrong in the risky operation!");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`CustomError caught: ${error.message}`);
        } else {
            console.error(`Unexpected error: ${error.message}`);
        }
    }
}

riskyOperation();

function userInput() {
    try {
        let input = prompt("Enter a string");

        if (input.length == 0 || input == '') {
            throw new Error("Invalid input! Please enter a string.");
        }
        console.log(input);
    } catch (error) {
        console.error(error.message);
    }
}


userInput();

//Activity Four :

function randomPromice() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {

            if (isSuccess) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        })
    }, 1000)
}


async function randomPromice2() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {

            if (isSuccess) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        })
    }, 1000)
}

randomPromice().then(result => console.log(result))
    .catch(error => console.error(error));

randomPromice2().then(result => console.log(result))
.catch(error => console.error(error));

//Activity Five :

function fetchData() {
    const invalidUrl = "https://invalid-url.com/data";

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(`Fetch error: ${error.message}`);
        });
}

// Example usage:
fetchData();

async function fetchData1() {
    const invalidUrl = "https://invalid-url.com/data";
try{

   const response = await fetch(invalidUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }
catch(error){
    console.error(`Fetch error: ${error.message}`);
}
}

// Example usage:
fetchData1();


