//Contoh promise #1 
// let promiseToCleanTheRoom = new Promise(function (resolve, reject) {

//     //cleaning the room
//     let isClean = true;

//     if (isClean) {
//         resolve('Clean');
//     } else {
//         reject('not Clean');
//     }

// });

// promiseToCleanTheRoom
// .then(function (result) {
//     console.log('the room is ' + result);
// })
// .catch(function (fromReject) {
//     console.log('the room is ' + fromReject);
// })

//Contoh promise #2
let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned The Room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' Remove Garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' won Icecream');
    });
};

// cleanRoom().then(function (result) {
//     return removeGarbage(result);
// }).then(function (result) {
//     return winIcecream(result);
// }).then(function (result) {
//     console.log('Finished ' + result)
// })

//menggunakan promise.all
//Cara kerjanya adalah menunggu hingga semua eksekusi promise selesai dan menghasil output dalam bentuk array. 
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
console.log('All finished')
})

//menggunakan promise.race
//romice.race hanya menghasilkan promise yang lebih dulu selesai.
// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
//     console.log('All finished')
// });

var janjian = new Promise((resolve,reject) =>{
    resolve("Janjian Berhasil")
    reject("Janjian Gagal");
    
})
janjian
.then(function(result) {
    console.log(result)})
.catch((err) => {console.log(err)})
