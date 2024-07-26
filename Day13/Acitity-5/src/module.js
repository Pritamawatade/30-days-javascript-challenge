export const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
