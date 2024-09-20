//var c = 300
let a = 300
if(true)
{
let a = 10
const b = 20
//var c = 30
//console.log("INNER : ",a );
}
//console.log(a);
// console.log(b);
// console.log(c);


function one()
{
    const username ="Tohid"

    function two()
    {
        const website ="Youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()


if(true)
{
    const username ="Reza"
    if(username==="Reza")
    {
        const website=" telegram"
        //console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//==================== imteresting========================
console.log(addone(5))
function addone(num)
{
    return num+1
}


// error comes in this function because function is stored in variabke before decleration
//console.log(addTwo(5))
const addTwo = function(num)
{
    return num+2
}
