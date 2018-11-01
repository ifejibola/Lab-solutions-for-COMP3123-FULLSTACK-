// Create Customer class with two string properties
var Customer = /** @class */ (function () {
    function Customer() {
    }
    // Add greeter method
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();
