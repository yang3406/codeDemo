class Parent {
  sayHI() {
    console.log("parent say hi");
  }
}

class Children extends Parent {
  constructor() {
    super()
  }
  sayhello() {
    super.sayHI()
    //console.log(this.sayHI());
  }
}

let children = new Children();

children.sayhello()