class MyClass {
  // Class property
  static classProperty = "I am Victormary Esom";

  // Class method
  static classMethod() {
    console.log("This is a class method");
  }

  // Static method
  static staticMethod() {
    console.log("This is a static method");
  }
}
// Accessing the class property
console.log(MyClass.classProperty);

// Calling the class method
MyClass.classMethod();

// Calling the static method
MyClass.staticMethod();
