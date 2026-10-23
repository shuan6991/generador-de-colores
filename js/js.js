document.addEventListener('DOMContentLoaded', () => {


})

function generarColorHexa() {

    const hexa = "0123456789ABCDEF"

    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random(hexa) * 16)]
    }

    return color
}



function colorAleatorios(){

    let colors = []

    for(let i=0; i<9; i++ ){
       colors = [...colors, generarColorHexa()]
    }    
    
    return colors
}


console.log(colorAleatorios())