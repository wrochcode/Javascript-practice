//function
function sum(x, y) {
    return x + y;
}

console.log(sum(4, 5));

//native
setTimeout(function() {
    console.log('Wahyu')
}, 2000)

//ES6
setTimeout(() => console.log("It's Time out"), 2000);

//native
// setInterval(function() {
//     console.log('Wahyu')
// }, 1000)

// let count = 1;
// setInterval(function() {
//     console.log(count);
//     count++;
// }, 100)

//ES6 error
// let count = 1;
// setInterval(() => console.log(count), count++, 200);