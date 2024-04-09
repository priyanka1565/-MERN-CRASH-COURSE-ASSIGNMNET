// Implementing a counter using closure

function createCounter() {
    let count = 0;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    return { increment, decrement };
}
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1


// Closure for rate limiter
function createRateLimiter(limit) {
    let count = 0;

    function checkLimit() {
        if (count < limit) {
            count++;
            return true;
        } else {
            return false;
        }
    }

    return checkLimit;
}
const checkLimit = createRateLimiter(2);
console.log(checkLimit()); // Output: true
console.log(checkLimit()); // Output: true
console.log(checkLimit()); // Output: false

// Custom implementation of map function

function customMap(func,arr) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap((x) => x * x, numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]