import animacionPresentacion from "./animacion_presentacion.js"
import animacionMiPortfolio from "./animacion_miPortfolio.js"

const PATH = "../assets/proyectos/proyectos.json"
let flagMiPortfolio = true

window.addEventListener('load', animacionPresentacion)

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.miPortfolio').getBoundingClientRect()
    if(rect.top <= 200){
        while(flagMiPortfolio){
            animacionMiPortfolio(PATH)
            flagMiPortfolio = false
        }
    }
})

