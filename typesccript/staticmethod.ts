class Person {
  static age = 28;

  static birthday() {
    this.age += 1;
    console.log("Hooray! Im, " + this.age);
  }
}

Person.birthday();
