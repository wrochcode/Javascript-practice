//setInterval & setTimeout
// setInterval(() => {
//     console.log("wahyu")
// }, 500);

let i = 0;
let interval = setInterval(() => {
    i++;
    if (i == 20) {
        clearInterval(interval);
    }
    console.log(i);
}, 500);

setTimeout(() => {
    console.log("boom");
}, 2000)