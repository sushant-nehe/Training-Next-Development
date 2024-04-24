//define all the modifiers in code
//public, private, readonly, protected
class Customer {
    custId:number;
    custNAme:string;

    constructor(a:number, b:string) {
        this.custId = a;
        this.custNAme = b;
    }
}
class Customers {
    public allCustomers:Customer[]=[];

    constructor() { }

    public createCustomer(custName:Customer) {
        this.allCustomers.push(custName);
        console.log(this.allCustomers);
    }

    public listCustomers() {
        console.log(this.allCustomers);
    }

    public updateCustomer(a:number, b:string) {
        this.allCustomers.forEach(customer => {
            if(customer.custId === a) customer.custNAme = b;
        })
        console.log(this.allCustomers);
    }

    public deleteCustomer(id:number) {
        this.allCustomers.forEach((customer, i) => {
            if(customer.custId === id) {
                this.allCustomers.splice(i, 1);
            };
        })
        console.log(this.allCustomers);
    }
}


// let p = new Person(101);
let c1 = new Customer(101, "Cust1");
let c2 = new Customer(102, "Cust2");
let c3 = new Customer(103, "Cust3");
let c4 = new Customer(104, "Cust4");

let customers = new Customers();

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




