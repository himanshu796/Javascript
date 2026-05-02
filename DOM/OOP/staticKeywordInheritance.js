class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const bagheera = new User("bagheera")
// console.log(bagheera.createId())        //static methods do not exist on instances. They exist only on the class itself.

console.log(User.createId())    // nd static methods live directly on the class

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());     //iphone is an instance, and static methods never live on instances.
console.log(Teacher.createId())     // child CLASS inherits static from parent CLASS
