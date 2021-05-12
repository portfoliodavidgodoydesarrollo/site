import animacionPresentacion from "./animacion_presentacion.js"
import animacionMiPortfolio from "./animacion_miPortfolio.js"
import animacion_sobreMi from "./animacion_sobreMi.js"
import animacion_misHabilidades from "./animacion_misHabilidades.js"
import animarBotones from "./animacion_botones.js"
import animacionSobreMi from "./animacion_sobreMi.js"

/* Declaración de variables necesarias */

const proyectosPath = "../assets/proyectos/proyectos.json"

/* Animación sección inicial */

animacionPresentacion()

/* Animación sección Mi Portfolio */

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.miPortfolio').getBoundingClientRect()
    if(rect.top <= 500){
        animacionMiPortfolio(proyectosPath)
    }
})

/* Animación sección Sobre Mi*/

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.sobreMi').getBoundingClientRect()
    
    if(rect.top <= 500){
        animacionSobreMi()
        
    }
})

/* Animación sección Mis Habilidades*/

window.addEventListener('scroll', () => {
    const rect = document.querySelector('.misHabilidades').getBoundingClientRect()
    
    if(rect.top <= 500){
        animacion_misHabilidades()
        
    }
}) 

/* Agrego animación a los botones */

animarBotones(document.querySelectorAll('.botonAnimado'))