// object can be declared by two ways
//1.literal
// 2.constructor or singleton
// object ko value lie (.) dot notation le access garxau but kunai kunai case ma hami square bracket use garxau data access garna ko lagi
// if we declared as litearl then there is not singleton form
// if we make object by using constructor then singleton is always form


// Object.create// declared as constructor here singleton is form

// object literal curly bracket nai object ho yesma hami value rakh xau
 
const mySym = Symbol("key1")


const JsUser = {
        name: "Tohid",
        "full name":"Tohid Reza",
        [mySym]:"mykey1",// imp in interview
        age : 24,
        location:"jnk",
        email:"tohid786@gmail.com",
        isLoggedIn:false,
        lasLoginDays:["sub","mon"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(  JsUser[mySym])

// JsUser.email= "reza786@gmail.com"// using = to notation we can override value. 
// Object.freeze(JsUser)
// JsUser.email = "Tohid786@gmail.com"
console.log(JsUser);


// function in js
// we function treate funtion as variable in js there is no any descrimination or difference

JsUser.greeting = function()
{
    console.log("hello js user");
}

JsUser.greetingTwo = function()
{
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
