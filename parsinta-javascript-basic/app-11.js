//8 Metode Yang Anda Harus Tau Dalam Array

//filter function
const people = [
    {
        firstname: "wahyu",
        lastname: "Rochman",
        age:22,
    },
    {
        firstname: "putri",
        lastname: "mega",
        age:23,
    },
    {
        firstname: "lia",
        lastname: "kusuma",
        age:35,
    },
    {
        firstname: "John",
        lastname: "Snow",
        age:35,
    },
];

// cara 1
// const modifyPeople = people.filter((item)=>{//funnction filter
//     return item.age<30;//filter data age 
// })
// console.log(modifyPeople); 

// cara 2
// const modifyPeople = people.map((item)=>{//funnction map -> mengubah array
//     // tanpa kondisi
//     // return {
//     //   name: `${item.firstname} ${item.lastname}`,
//     //   age: item.age,
//     // };

//     // dengan kondisi
//     return (item.age<30 &&{
//       name: `${item.firstname} ${item.lastname}`,
//       age: item.age,
//     });
// })
// console.log(modifyPeople); 


//advance
// const filteredPeople = people.filter((item)=>{//funnction filter
//     return item.age<=35;//filter data age 
// });
// singkatnya
// const findPerson = people.filter((item) => item.age<=30);

// const mapPeople = filteredPeople.map((item)=>{//funnction map -> mengubah array
//     return {
//       name: `${item.firstname} ${item.lastname}`,
//       age: item.age,
//     };
// })

// console.log(mapPeople); 

//cara 3
// const findPerson = people.find((item) => item.age<=30); // menampilkan 1 data/objek yang memenuhi kondisi tersebut
// console.log(findPerson); 

//cara 4
// people.forEach((item)=> console.log(item.firstname));
// people.forEach((item)=> console.log(`First name is ${item.firstname}`));

//ngide
// let number = 1;
// let totalData = people.length;
// people.forEach((item)=>{
//     console.log(`First name in array ${number} is ${item.firstname}`);
//     if(number<totalData){
//         number++;
//     }
// });
// console.log(`last number is ${number}`);

//cara 5
// const somePeople = people.some((item)=>item.age>=35);//mengecek satu persatu dengan output true or false
// console.log(somePeople);

//cara 6
// const everyPeople = people.every((item)=>item.age>=35);//memberikan kesimpulan array dengan kondisi yang menghasilkan output true or false
// console.log(everyPeople);

//cara 7
// const reducePeople = people.reduce((currentItem,item)=>{ //fungsi menghitung
// return item.age + currentItem;
// }, 0);
// console.log(reducePeople);

// cara 8
const number = [1, 2, 3, 4, 5, 6];
let x =number.includes(3);//mengecek apakah terdapat bilangan dan berlaku hanya untuk simple array/ array 1 dimensi
console.log(x);