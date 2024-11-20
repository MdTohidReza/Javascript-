 const form =document.querySelector('form')
 // this usecase will give empty
//  const height = parseInt(document.querySelector('#height').value)

 form.addEventListener('submit' , function(e)  {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weigth = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height==='' || height < 0 || isNaN(height)){
        result.innerHTML =`please give a valid height ${height}`;
    }
    else if(weigth==='' || weigth < 0 || isNaN(weigth)){
        result.innerHTML =`please give a valid height ${weigth}`;
    }
    else{
        const bmi = (weigth / ((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
    
 })