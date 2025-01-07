// object literal
const user = {
    username:"Tohid",
    loginCount : 8,
    signedIn:true,
    getUserDetails: function(){
       console.log("got user details from database");
       console.log(`username:${this.username}`);
       console.log(this);  
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// constructor function
function User(username, loginCount, isLoggedIn)
{
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   return this
}
const userOne = new User("Tohid" , 12, true)
const userTwo = new User("Reza", 11, false)
console.log(userOne);
console.log(userTwo);



