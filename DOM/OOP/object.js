// ******* In JavaScript, a function is not just a function, it’s also an OBJECT.

function multipleBy5(num) {
    return num * 5
}

multipleBy5.power = 2       // We’re basically attaching a property to the function.

console.log(multipleBy5(5));    // 25
console.log(multipleBy5.power);     // 2 
console.log(multipleBy5.prototype);     // {} , Every function automatically gets a prototype property.


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) //new does 4 things: Creates object, Links prototype, Binds this,Returns object
const tea = createUser("tea", 250)

chai.printMe()



/* "new" keyword
"new" does 4 things:

*. A new object is created: The new keyword initiates the creation of a new JavaScript object.

*. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

*. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, newly created object, to be the intended return value.

*. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
