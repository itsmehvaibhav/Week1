var Person = /** @class */ (function () {
    function Person() {
    }
    Person.birthday = function () {
        this.age += 1;
        console.log("Hooray! Im, " + this.age);
    };
    Person.age = 28;
    return Person;
}());
Person.birthday();
