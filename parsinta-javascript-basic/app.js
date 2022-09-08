console.log('Hello World')

// var = re - assignable / bisa diubah isinya
var firstname = 'Wahyu';
// let = re - assignable / bisa diubah isinya
let midname = 'Wahyu';
// const = re - assignable / bisa diubah isinya
const lastname = 'Wahyu';


const number = [1, 2, 3];
console.log(Array.isArray(number)); //cek apakah array
number[2] = 1;
console.log(number);
if (true) {
    var partnername1 = 'putri mega';
    console.log(partnername1);
}
//let private jik masuk dalam array
//contoh salah:
if (true) {
    let partnername2 = 'putri';
}
console.log(partnername2);
//contoh benar:
if (true) {
    let partnername3 = 'putri';
    console.log(partnername3);
}
// atau
let partnername4 = 'putri';
if (true) {
    console.log(partnername4);
}