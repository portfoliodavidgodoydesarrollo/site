import animacionPresentacion from "./animacion_presentacion.js"
import animacionMiPortfolio from "./animacion_miPortfolio.js"
import animarBotones from "./animacion_botones.js"

/* Declaración de variables necesarias */

const proyectosPath = "../assets/proyectos/proyectos.json"
let flagMiPortfolio = true

/* Animación sección inicial */

animacionPresentacion()

/* Animación sección Mi Portfolio */

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.miPortfolio').getBoundingClientRect()
    if(rect.top <= 500){
        while(flagMiPortfolio){
            animacionMiPortfolio(proyectosPath)
            flagMiPortfolio = false
        }
    }
})

/* Animación sección Sobre Mi*/

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

/* Agrego animación a los botones */

animarBotones(document.querySelectorAll('.botonAnimado'))