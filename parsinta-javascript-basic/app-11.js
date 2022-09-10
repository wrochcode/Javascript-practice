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
const findPerson = people.find((item) => item.age<=30); // menampilkan 1 data/objek yang memenuhi kondisi tersebut
console.log(findPerson); 
