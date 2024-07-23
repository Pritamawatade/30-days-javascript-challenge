//Activity one 
function messageWithTimeout(message, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, timeout);
    });
}
function rejectedPromise(message, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(message);
        }, timeout);
    });
}

messageWithTimeout("Hello, this is your message!", 2000)
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error("Promise rejected:", err);
    });

rejectedPromise("Hello, this is your message!", 2000)
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error("Promise rejected:", err);
    });


    // Activity two
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched data 1');
            resolve('Data 1');
        }, 1000);
    });
};

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched data 2');
            resolve('Data 2');
        }, 2000);
    });
};

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched data 3');
            resolve('Data 3');
        }, 1500);
    });
};

fetchData1()
    .then((data1) => {
        console.log('Processing:', data1);
        return fetchData2();
    })
    .then((data2) => {
        console.log('Processing:', data2);
        return fetchData3();
    })
    .then((data3) => {
        console.log('Processing:', data3);
        console.log('All data fetched and processed');
    })

    .catch((error) => {
        console.error('Error:', error);
    });

    async function logResolvedValue(promise) {
        try {
            const value = await promise;
            console.log('Resolved value:', value);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const examplePromise = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve('This is a  resolved  promise activity three');
        },1000)
    });

    logResolvedValue(examplePromise);


function fetchDataAndLog() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchDataAndLog();

// Asynchronous function to fetch data from a public API and log the response
async function fetchDataAndLog() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
fetchDataAndLog();

// Activity five


// Simulate fetching data from a server with promises
const fetchData11 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data 1');
        }, 1000);
    });
};

const fetchData22 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data 2');
        }, 2000);
    });
};

const fetchData33 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data 3');
        }, 1500);
    });
};

// Use Promise.all to wait for all promises to resolve
Promise.all([fetchData11(), fetchData22(), fetchData33()])
    .then((values) => {
        console.log('All data fetched:', values);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

    
Promise.race([fetchData11(), fetchData22(), fetchData33()])
    .then((values) => {
        console.log('All data fetched:', values);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

