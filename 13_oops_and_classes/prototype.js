let myName = "Tohid     "
console.log(myName.trueLength);


let myHeros = ["thor", "spiderMan"]

let heroPower =
{
    thor:"Hammer",
    spiderMan:"sling",
    getSpiderPower: function()
    {
        console.log(`spider power is ${this.spiderMan}`);
        
    }
}

Object.prototype.tohid = function()
    { 
        console.log(`tohid is present in all objects`);
    }

    // injecting something in array
    Array.prototype.heyTohid = function()
    {
        console.log(`hitesh says hello`);
        
    }
// heroPower.tohid()
// myHeros.tohid()
// myHeros.heytohid()
// heroPower.heyTohid()



// inheritance

const user={
    name :"Reza",
    email: "reza@gmail.com"
}


const Teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment :'js assignment',
    fullTime:true
}

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);  
}
anotherUsername.trueLength()
"tohid".trueLength()
