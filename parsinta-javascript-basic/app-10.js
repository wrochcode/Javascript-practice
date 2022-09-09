//Loops
// for
// while
// do while
// for ... in
// for ... of

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// function isPrime(x) {
//     let divider = 0;

//     for (let i = 1; i <= x; i++) {
//         if (x % i == 0) {
//             divider++;
//         }
//     }

//     if (divider == 2) {
//         console.log("it's");
//     } else {
//         console.log("it's not");
//     }
// }

// console.log(isPrime(10));

// for (let i = 1990; i <= 2022; i++) {
for (let i = 1990; i <= new Date().getFullYear(); i++) {
    console.log(i);
}