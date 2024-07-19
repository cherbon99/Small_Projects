class Person{
    name;
    static numberOfPeople = 0;

    constructor(name){
        this.name = name;
        Person.numberOfPeople++;
    }

    static getNumberOfPeople(){
        return this.numberOfPeople;
    }

    static removePerson(){
        this.numberOfPeople--;
    }
}

const p = new Person("chris");
const p2 = new Person("chris also");
Person.removePerson();
console.log(Person.getNumberOfPeople())