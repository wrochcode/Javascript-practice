//Callback
const users= [
    {username: 'wahyu', age: 22},
    {username: 'rochman', age: 21},
    {username: 'bantoro', age: 20},
];

// function getUser(){
//     setTimeout(() => {
//         console.log(users);
//     }, 300);
// }

function createdUser(user ,callback){
    setTimeout(()=>{
        users.push(user);
        callback();
    }, 300);
}
// createdUser({username:'tampan', age:23}, getUser);

//lebih ringkas
createdUser({username:'tampan', age:23}, ()=>{
    setTimeout(() => {
        console.log(users);
    }, 300);
});
// getUser();
