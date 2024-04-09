1. //Event loop
setTimeout(function () {
    console.log("Hello1");
}, 2000);
console.log("one");

setTimeout(function () {
    console.log("Hello2");
}, 2000);
console.log("two");
//setTimeout schedules the first function to run after 2000 milliseconds.
//console.log("one") is executed immediately.
//setTimeout schedules the second function to run after 2000 milliseconds.
//console.log("two") is executed immediately.
//After approximately 2 seconds:

//The first scheduled function (console.log("Hello1")) executes and logs "Hello1".
//Shortly after, the second scheduled function (console.log("Hello2")) executes and logs "Hello2".

2. //Promiese
// Function to fetch data from an API
function fetchData() {
    return new Promise(async (resolve, reject) => {
        try {
            // Using fetch to make an API call
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            // Parsing the response body as JSON
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(new Error('Failed to fetch data'));
        }
    });
}

// Function to use the fetched data
async function processData() {
    try {
        // Using async/await to wait for the data to be fetched
        const data = await fetchData();
        console.log('Data:', data);
        // Further processing of data can be done here
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error cases
    }
}

// Calling the function to process data
processData();

3. //async/await in JavaScript:
async function fetchData() {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    return data;
}
//Handling Errors:
async function fetchData() {
    try {
        const response = await fetch('https://example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error; // Re-throwing the error for handling outside of the async function
    }
}

