import animacionPresentacion from "./animacion_presentacion.js"
import cargaProyectos from "./carga_proyectos.js"

const PATH = "../assets/proyectos/proyectos.json"

window.addEventListener('load', animacionPresentacion)
window.addEventListener('load', () => {
    cargaProyectos(PATH)
})



/* window.addEventListener('scroll', () => {
    const rect = document.querySelector('.miPortfolio').getBoundingClientRect()
    console.log(rect.top)
    if(rect.top <= 0){
        animacionPresentacion()
    }
}) */

