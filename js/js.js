document.addEventListener('DOMContentLoaded', ()=>{

})


const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B" ,"C" , "D", "E", "F"]

function generarColores(){
  const color= []
    for(let i= 0; i< 6; i++){
       color = [Math.floor(Math.random(hexa)* 16)]
    }

    return color
}


console.log(generarColores())