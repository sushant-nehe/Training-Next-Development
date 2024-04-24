console.log("My 1st ts code");
var myNumber = 10;
console.log(typeof (myNumber));
console.log("value of the number is => " + myNumber);
var myName = "Next ts Session";
console.log(typeof (myName));
console.log("value of myName is => " + myName);
var myAnyVariable = "Univarsla Datatype";
console.log(typeof (myAnyVariable));
console.log("value of myAnyVariable is => " + myAnyVariable);
//array
var names = [];
names.push("any1");
names.push("any2");
names.push("any3");
console.log(names);
//different ttypes of functions
//normal function
function addValue(value1, value2) {
    return value1 + value2;
}
console.log(addValue(11, 22));
//function with optional parameters
function detailsCustomer(id, name, email) {
    console.log("Customer ID: " + id);
    console.log("Customer Name: " + name);
    if (email != undefined) {
        console.log("Customer Email: " + email);
    }
}
console.log(detailsCustomer(101, "CustName"));
console.log(detailsCustomer(101, "CustName", "custname@gmail.com"));
//function with default parameters
function discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("calculated discount is " + discount);
}
discount(1000);
discount(1000, 0.30);
//define enum
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
})(myConstants || (myConstants = {}));
console.log("finding enum");
console.log(2 * myConstants.pi);
