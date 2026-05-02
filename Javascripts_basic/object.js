const tinderUser = {}


//console.log(tinderUser)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

//const obj4 = Object.assign({}, obj1, obj2)
const obj5 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj5)

function calculate(val1, val2, ...num1) {
    return num1
}

//console.log(calculate(10, 20, 30))

// **************** IIFE **************
(function chai() {
    console.log(`Db connected`)
})();       // ******** semi colon is most important for 2 IIFE's to work

    (() => {
        console.log(`Db connected`)
    })()
    