//operator
const x = 5;
const y = 2;
const z = x * 5;
const a = x / 5;
const b = x + 5;
const c = x - 5;

const number = 5;
const numbertwo = undefined;
console.log(number);
console.log(number == 5); //cek benar atau salah, result 'true'
console.log(number === 5); //cek benar atau salah beserta type data, result 'true'
console.log(number === '5'); //cek benar atau salah beserta type data, result 'false'
console.log(number !== 5); //cek ketidakbenar dengan benar atau salah beserta type data, result 'false'
console.log(!!numbertwo); //cek ada value atau tidak seperti var_dump/dd