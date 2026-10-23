const boton = document.querySelector('.boton-submit')


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=> {
       boton.style.backgroundColor = generarColorHexa()
    }, 1000)    
})


function generarColorHexa() {

    const hexa = "0123456789ABCDEF"

    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random(hexa) * 16)]
    }

    return color
}

function generarColoresRGB() {

    let colors = []

    for (let i = 0; i < 3; i++) {
        let rgb = Math.floor(Math.random() * 255)
        colors = [...colors, rgb]
    }  
    return colors   
}




function colorAleatorios() {

    let colorsHexa = []
    let colorsRGB = []

    for (let i = 0; i < 9; i++) {
        colorsHexa = [...colorsHexa, generarColorHexa()]
        colorsRGB = [...colorsRGB, generarColoresRGB()]
    }

    return [colorsHexa, colorsRGB]
}


console.log(colorAleatorios())