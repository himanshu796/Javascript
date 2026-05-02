// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  // undefined


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){       // Object.prototype → affects everything
    console.log(`hitesh is present in all objects`);
}

Array.prototype.rahul = function(){         // Array.prototype → affects only arrays     
    console.log(`Rahul says hello`);
}

// heroPower.hitesh()       // Every object in JavaScript will have access to hitesh(), And since arrays are also objects, arrays get it too
// myHeros.hitesh()       // Arrays inherit from Object, So they also get hitesh()
// myHeros.rahul()      // Only arrays will have access to rahul()
// heroPower.rahul()    // heroPower is a plain object, It does NOT inherit from Array.prototype



// ************************* Inheritance *************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()