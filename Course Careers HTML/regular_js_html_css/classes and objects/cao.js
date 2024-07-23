class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

   greet() {
    return this.name, " ", this.age;
   }
}

class Teacher extends Person{
    course;

    constructor(name, age, course){
        super(name, age);
        this.course = course;
    }
    greet() {
        return "I am the teacher";
       }
}



class Student extends Person{
    group;

    constructor(name, age, group){
        super(name, age);
        this.group = group;
    }
}

const s1 = new Student("chris", 24, "Games")
const t1 = new Teacher("bruh" , 35, "storycrafting")
console.log(s1.greet());
