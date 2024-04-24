console.log("My 1st ts code");

let myNumber:number = 10;
console.log(typeof(myNumber));
console.log("value of the number is => " + myNumber);

let myName:String = "Next ts Session";
console.log(typeof(myName));
console.log("value of myName is => " + myName);

let myAnyVariable:any = "Univarsla Datatype";
console.log(typeof(myAnyVariable));
console.log("value of myAnyVariable is => " + myAnyVariable);


//array

const names:any[] = [];

names.push("any1")
names.push("any2")
names.push("any3")

console.log(names);


//different ttypes of functions

//normal function
function addValue(value1:number, value2:number) {
    return value1 + value2;
}
console.log(addValue(11, 22));


//function with optional parameters
function detailsCustomer(id:number, name:string, email?:string) {
    console.log("Customer ID: " + id);
    console.log("Customer Name: " + name);
    if(email!=undefined) {
        console.log("Customer Email: " + email);
    }
}
console.log(detailsCustomer(101, "CustName"));
console.log(detailsCustomer(101, "CustName", "custname@gmail.com"));

//function with default parameters
function discount(price:number, rate:number=0.50) {
    let discount = price * rate;
    console.log("calculated discount is " + discount);   
}
discount(1000);
discount(1000, 0.30)

//define enum
enum myConstants {
    pi=3.14,
    e=2.73,
    log2=0.30
}

console.log("finding enum");
console.log(2*myConstants.pi);

