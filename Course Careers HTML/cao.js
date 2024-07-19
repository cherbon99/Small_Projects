class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`hi computer, I am ${this.name} and I am ${this.age} years old`);
    }
}

const person = new Person("chris" , 25);
const person1 = new Person("kylie" , 25);
person.sayHi();
person1.sayHi();
