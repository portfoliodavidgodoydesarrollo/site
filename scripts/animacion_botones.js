export default function agregarEventoABoton(botones){
    /* Itero por cada botón */
    botones.forEach(boton => {

        /* Capturo link e identifico si es interno o externo */
        const links = boton.href.split("#")

        /* Escucha de evento */
        boton.addEventListener('click', (event)=>{
            
            /* Evito comportamiento por defecto */
            event.preventDefault()

            /* Creo fondo movil y agrego clase */
            const fondo = document.createElement('div')
            fondo.classList.add('header__botonContactoFondo')

            /* Capturo innerHTML de boton */
            const interiorBoton = boton.innerHTML

            /* Agrego elemento fondo a botón*/
            boton.prepend(fondo)

            /* Capturo childrens de botón */
            const children = boton.childNodes

            /* Animación concatenada */
            slideAnimacionBoton(55,fondo,children,1,200,()=>{
                slideAnimacionBoton(32,fondo,children,2,200,()=>{
                    slideAnimacionBoton(0,fondo,children,3,200,()=>{
                        /* Acción final después de animación */                      
                        toLink(links,()=>{
                            reiniciarBoton(boton, interiorBoton, 200)
                        })
                    })
                })
            })

    
        })
    })

}

function slideAnimacionBoton(porcentaje, fondo, childrens, children, timeLapse, callback = ()=>false){
    /* Se ejecuta el código después de timeLapse en ms */
    setTimeout(()=>{
        /* Se mueve fondo */
        fondo.style.transform = `translateX(-${porcentaje}%)`

        /* Se colorea texto */
        childrens[children].style.color = "black"
        childrens[children].style.position = "relative"

        /* Ejecuto función pasada */
        callback()
    }, timeLapse)
}

function toLink(links, callback){    
    /* Dirigir a link dependiendo si es interno o externo */  
    const link = links[links.length - 1]
    links.length > 1 ? document.querySelector(`#${link}`).scrollIntoView() : window.open(link)

    /* Ejecuto función pasada */
    callback()
}

function reiniciarBoton(boton,interiorBoton, timeLapse){  
    /* Se ejecuta el código después de timeLapse en ms */  
    setTimeout(()=>{
        /* Reemplazar innerHTML por el capturado al principio, reinicio de botón, depués de 200ms */
        boton.innerHTML = interiorBoton
    }, timeLapse)
}