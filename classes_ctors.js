function User(name, age) {
    let thiss = {};
    thiss.name = name;
    thiss.age = age;
    return thiss;
}

function User_(name, age) {
    this.name = name;
    this.age = age;
}

// another ctor
class User___ {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("hi");
    }
}

const u = User("Sally", 22);
const u2 = User_("Dev", 19);
const u3 = new User_("Dev", 20);
const u4 = new User___("dkjebd", 2);
console.log(u);
console.log(u2);
console.log(u3);
console.log(u4);
u4.speak();

//  adding 'new' before a function call makes an object named 'this' and sets it to {}, and then returns it at the end
