class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)     // calls User constructor
        this.email = email      //this doesn't exist until super()
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.logMe()
chai.addCourse()

const masalaChai = new User("Masala Chai")

masalaChai.logMe()
// masalaChai.addCourse()      //masalaChai is a User, not a Teacher. addCourse() only exists on Teacher. User knows nothing about Teacher.

console.log(chai instanceof User)