//Activity one 
class Person {
    name = "John";
    lastName= "danny"
    age = 25;
    greet() {
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    }
    changethings(name, age) {
        this.name = name;
        this.age = age;
        console.log("New name is " + this.name + " and new age is " + this.age + ".");
    }
    // static method
    static greeting() {
        console.log('This is a static method');

    }

    get detail(){
        return this.name + " " + this.lastName ;
    }

    set setname(name){
        this.name = name;
    }
    set setlastName(lastName){
        this.lastName = lastName;
    }
}

let john = new Person();

john.greet();

john.changethings("Jane", 30);


// Activity two

class student extends Person {
    static studentCount = 0
    constructor() {
        super()
        student.studentCount++;
        console.log('The total nnumber of students is' + student.studentCount);

    }

    studentId = 11;


    getStudent() {
        return this.studentId;
    }
    //overrideing the greeting method
    greet() {
        console.log("Hello, my student id is " + this.studentId + " . I'm also a student.");
    }

}

student1 = new student();
hi = new student();
console.log('The student is ' + student1.getStudent());
student1.greet()


// Activity three
Person.greeting()


// / Activity four


console.log(john.detail)
Person.setname = "Pritam"
Person.setlastName = "Awatade"

console.log(john.detail)

// Activity five

class Account{
    #balance = 0
    demposite(money){
        this.#balance += money
        console.log(`Deposited ${money}. Current balance is ${this.#balance}`)
    }
    withdraw(money){
        this.#balance -= money
        console.log(`Withdrew ${money}. Current balance is ${this.#balance}`)
    }
}

acc1 = new Account

acc1.demposite(1000)

acc1.withdraw(500)