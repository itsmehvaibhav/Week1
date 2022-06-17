class Employee {
    constructor() {
        var name;
        var rating;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getRating() {
        return this.rating;
    }
    setRating(rating) {
        this.rating = rating;
    }
}
var emp = new Employee();
emp.setName("Naren");
emp.setRating(9);
console.log(emp.getName() + " " + emp.getRating());