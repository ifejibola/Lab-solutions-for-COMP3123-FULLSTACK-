// Create Customer class with two string properties
class Customer{
    private firstName: string;
    private lastName: string;
    
    // Add Constructor that takes tow parameters 
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //greeter method
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer("John", "Smith");
customer.greeter();


