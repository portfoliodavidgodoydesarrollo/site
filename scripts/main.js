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

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.sobreMi').getBoundingClientRect()
    
    if(rect.top <= 500){
        $(".sobreMiAnimado" ).css ("transform","scale(1)")
        $(".sobreMiAnimado" ).css ("opacity","1")
        $(".sobreMiAnimado" ).css ("transition","1.5s")
        $(".sobreMi__imagen").css ("transform","scale(1)")
        $(".sobreMi__imagen").css ("transition","1.5s")
        
    }
}) 