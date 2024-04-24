//define all the modifiers in code
//public, private, readonly, protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(a) {
        this.personID = a;
        this.greeting = "Welcome";
        this.myRef = 900;
        console.log("Person object created");
        console.log("PersonID: " + this.personID);
    }
    //\creating public method here
    Person.prototype.createPerson = function () {
        return this.greeting + "-" + "Person created by method --> by ID" + "-" + this.personID;
    };
    //private method
    Person.prototype.testPrivate = function () {
        console.log("calling private method");
        return "calling private method";
    };
    Person.prototype.testPrivaeMethod = function () {
        console.log("calling private method from public method");
        return "";
    };
    Person.testStatic = function () {
        return "Calling static method";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testStudent = function () {
        return "Student is created by ref id-- " + this.myRef;
    };
    return Student;
}(Person));
// let p = new Person(101);
var s = new Student(101);
console.log("calling the public method --> " + s.createPerson());
console.log("calling the private method --> " + s.testPrivaeMethod());
console.log("calling the static method --> " + Person.testStatic());
console.log("calling the child class method --> " + s.testStudent());
