// const tinderUser = new Object() eiter this or this.this is singleton object

const tinderUser = {}// this is not singleton object
 tinderUser.id = "123abc"
 tinderUser.name ="reza"
 tinderUser.isLoggedIn = "False"
// console.log(tinderUser);

const regularUser = 
{
    email:"reza777@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname:"Tohid",
            lastname :"Reza"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}// using spread
//console.log(obj3);

const users = 
[
    {
        id:1,
        email:"nt@gmail.com"
    },
    {
        id:1,
        email:"nt@gmail.com"
    },
    {
        id:1,
        email:"nt@gmail.com"
    },

]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));