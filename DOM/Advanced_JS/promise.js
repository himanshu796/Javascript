// ************ One Way to write Promise *****************
// ********************** Creation of Promise ***************
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

// ****************** Consumption of Promise **************
promiseOne.then(function () {       // when resolve() is called then .then is connected to it
    console.log('Promise consumed');
})

// ********************* Second Way to write Promise **********************
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is completed')
        resolve()
    }, 1000)
}).then(function () {       // when resolve() is called then .then is connected to it
    console.log('Async 2 Promise consumed');
})

// ************ Passing parameters in resolve **************
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Amit", email: "amit@amit.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

// *************** Using error based checking, using reject() & to avoid Callback hell ********** 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Golu", password: "123" })
        } else {
            reject('ERROR:Something is wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {             // this username came from above .then()
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => {                  //finally() runs always — whether the promise is resolved or rejected.It's used for cleanup tasks like hiding a loader, closing a connection, etc.
    console.log("The promise is either resolved or rejected")
})


// ****************** Promise with async/await **************
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// ***************** Using fetch()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/himanshubaunthiyal')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/himanshubaunthiyal')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


