class Teacher{
    name;
    age;
    #salary;

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }


    getSalary(){
        return this.#salary;
    }
    setSalary(newSalary){
        if (newSalary <= 0){
            throw Error("invalid amount, must be above 0")
        }
        this.#salary = newSalary
    }
}

const teacher = new Teacher("chris" , 25, 60000);
const teacher1 = new Teacher("kylie" , 25, 65000);


teacher.setSalary(1000);
console.log(teacher.getSalary());