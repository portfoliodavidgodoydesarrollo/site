import animacionPresentacion from "./animacion_presentacion.js"
import animacionMiPortfolio from "./animacion_miPortfolio.js"
import animarBotones from "./animacion_botones.js"
import animacionSobreMi from "./animacion_sobreMi.js"
import misHabilidades from "./animacion_misHabilidades.js"

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
animacionSobreMi();

/* Animacion seccion Mis habilidades */
misHabilidades();


/* Agrego animación a los botones */

animarBotones(document.querySelectorAll('.botonAnimado'))