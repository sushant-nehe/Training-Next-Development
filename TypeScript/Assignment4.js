//define all the modifiers in code
//public, private, readonly, protected
var Customer = /** @class */ (function () {
    function Customer(a, b) {
        this.custId = a;
        this.custNAme = b;
    }
    return Customer;
}());
var Customers = /** @class */ (function () {
    function Customers() {
        this.allCustomers = [];
    }
    Customers.prototype.createCustomer = function (custName) {
        this.allCustomers.push(custName);
        console.log(this.allCustomers);
    };
    Customers.prototype.listCustomers = function () {
        console.log(this.allCustomers);
    };
    Customers.prototype.updateCustomer = function (a, b) {
        this.allCustomers.forEach(function (customer) {
            if (customer.custId === a)
                customer.custNAme = b;
        });
        console.log(this.allCustomers);
    };
    Customers.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.allCustomers.forEach(function (customer, i) {
            if (customer.custId === id) {
                _this.allCustomers.splice(i, 1);
            }
            ;
        });
        console.log(this.allCustomers);
    };
    return Customers;
}());
// let p = new Person(101);
var c1 = new Customer(101, "Cust1");
var c2 = new Customer(102, "Cust2");
var c3 = new Customer(103, "Cust3");
var c4 = new Customer(104, "Cust4");
var customers = new Customers();
customers.createCustomer(c1);
customers.createCustomer(c2);
customers.createCustomer(c3);
customers.createCustomer(c4);
console.log("Listing all customers");
customers.listCustomers();
console.log("update customer name");
customers.updateCustomer(104, "Customer44");
console.log("delete customer");
customers.deleteCustomer(103);
