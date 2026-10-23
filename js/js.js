//Variables

const boton = document.querySelector('.boton-submit')
const form = document.querySelector('.form-main')
const paleta = document.querySelector('.paleta-colores')


//Evento del DOM
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        boton.style.backgroundColor = generarColorHexa()
    }, 1000)

    datosForm()
    colorAleatorios()

})


//Funcion para obtener datos del formulario
function datosForm() {
    form.addEventListener('submit', e => {
        e.preventDefault()

        const data = new FormData(form)
        const tipo = data.get('tipo')
        const cantidad = data.get('cantidad')

        colorAleatorios(tipo, cantidad)
    })
}



//Funcion para generar colores Hexadecimales
function generarColorHexa() {

    const hexa = "0123456789ABCDEF"

    let color = "#"

    for (let i = 0; i < 6; i++) {

        //Contatenacion de los colores
        color += hexa[Math.floor(Math.random(hexa) * 16)]
    }

    return color
}


//Funcion para obtener colores RGB
function generarColoresRGB() {

    let colors = []

    for (let i = 0; i < 3; i++) {
        let rgb = Math.floor(Math.random() * 255)

        //Se guarda las convinaciones en un arreglo
        colors = [...colors, rgb]
    }

    return colors
}




//Funcion para generar los colores deacuerdo a la cantidad y el tipo seleccionado

function colorAleatorios(tipo, cantidad) {

    let colores = []

    for (let i = 0; i < cantidad; i++) {

        if (tipo === "Hexa") {
            colores = [...colores, generarColorHexa()]
        } else if (tipo === "RGB") {
            colores = [...colores, generarColoresRGB()]
        }

    }

    insersionHtml(colores)


}


//Funcion de para insertar los colores en el html
function insersionHtml(colores) {

    //se valida que el arreglo teng algo
    if (colores.length) {

        // se insertan los colores
        paleta.innerHTML = `
            <h3>Paltea de colores</h3>

            <div class="contenedor-paleta">
                ${colores.map(color => `
                    <div style="background-color: ${color}; padding: 2rem;">

                    </div>         
       
                 `).join('')}
            </div>
        
        `     
    }else{
         paleta.innerHTML= `
            <h2 class="paleta-titulo">Escoge el tipo de los colores y el tamaño</h2>
         
         `
    }
}


