class CompanyName {
    constructor() {
        this.company = "vaibhav";
    }
}
class Employee extends CompanyName {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
}
var emp = new Employee(1, "John");
console.log(emp.id + " " + emp.name + " " + emp.company);