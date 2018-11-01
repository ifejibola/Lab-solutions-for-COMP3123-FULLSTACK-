// Create Customer class with two string properties
var Customer = /** @class */ (function () {
    // Add Constructor that takes tow parameters 
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //greeter method
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();
