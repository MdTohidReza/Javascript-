// immediately invoked funtion expressions(IIFE)
(
function chai()// named iffe
{
    console.log(`DB CONNECTED`);  
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Tohid')