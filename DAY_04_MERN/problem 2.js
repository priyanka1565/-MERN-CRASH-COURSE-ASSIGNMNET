// Execution Context & this Keyword Behavior
const obj = {
    name: 'John',
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Higher-Order Functions
function greetWithExcitement(greetFunction) {
    return function () {
        greetFunction.call(this); // 'this' retains its context
        console.log('Have a great day!');
    };
}

const excitedGreet = greetWithExcitement(obj.greet);

// Prototypal Inheritance
const person = {
    name: 'Alice',
    age: 30,
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

const student = Object.create(person);
student.major = 'Computer Science';
student.study = function () {
    console.log(`${this.name} is studying ${this.major}.`);
};

// Usage
obj.greet(); // Output: Hello, my name is John.
excitedGreet(); // Output: Hello, my name is undefined. Have a great day!
student.introduce(); // Output: Hi, I'm Alice and I'm 30 years old.
student.study(); // Output: Alice is studying Computer Science.
