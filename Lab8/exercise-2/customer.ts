// Create Customer class with two string properties
class Customer{
    firstName: string;
    lastName: string;
    // Add greeter method
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

}

let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();





