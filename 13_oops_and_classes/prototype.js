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
heroPower.tohid()
myHeros.tohid()
// heroPower.heyTohid()

