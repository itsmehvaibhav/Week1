function Student() {
    this.Name = "Name";
    throw new Error("You cannot create an instance of Abstract Class");
}
Student.prototype.print = function() {
    return "Student is: " + this.Name;
};

function KG(Name) {
    this.Name = Name;
}
KG.prototype = Object.create(Student.prototype);
var kg = new KG("Vivek");
console.log(kg.print());