//define all the modifiers in code
//public, private, readonly, protected

class Person {
    public personID:number;
    private greeting:string;
    protected myRef:number;

    constructor(a:number) {
        this.personID = a;
        this.greeting = "Welcome";
        this.myRef = 900;
        console.log("Person object created");
        console.log("PersonID: " + this.personID);
               
    }

    //\creating public method here
    public createPerson():string {
        return this.greeting + "-" + "Person created by method --> by ID" + "-" + this.personID;
    }

    //private method
    private testPrivate():string {
        console.log("calling private method");
        return "calling private method";
    }

    public testPrivaeMethod():string {
        console.log("calling private method from public method");
        return "";
        
    }

    static testStatic():string {
        return "Calling static method";
    }
}

class Student extends Person {
    testStudent():string {
        return "Student is created by ref id-- " + this.myRef
    }
}

// let p = new Person(101);
let s = new Student(101);
console.log("calling the public method --> " + s.createPerson());
console.log("calling the private method --> " + s.testPrivaeMethod());
console.log("calling the static method --> " + Person.testStatic());
console.log("calling the child class method --> " + s.testStudent());