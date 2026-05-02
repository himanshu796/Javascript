class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}amit`
    }

    set password(value){
        this._password = value
    }
}

const amit = new User("amit@amit.ai", "abc")
console.log(amit.email);
console.log(amit.password);
