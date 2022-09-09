let firstname = 'Wahyu';
let number = 1;
let yes = false;
let isNull = null;

let people = [
    { username: 'Wahyu ' },
    { username: 'Rochman ' },
    { username: 'Bantoro ' },
];

let person = { username: 'Wahyu ', age: 22, mysweetheart: 'putri' };


//tambahan
people.push({ username: 'Putri' }); //menambah dari bawah
people.unshift({ username: 'Arum' }); //menambah dari atas

console.log(people);
// console.log(people.pop()); //melihat data terakhir
console.log(people.length); //menghitung array
console.log(person.mysweetheart); //menghitung array