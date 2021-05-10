export default function animacionPresentacion(){
    const elementos = capturaElementosPresentacion()
    animacionPresentacionFigurasGeometricas(elementos.figuras)
    animacionPresentacionPuntos(elementos.puntos)
    animacionPresentacionIconosProfesional(elementos.iconos)
    elementos.puntos.addEventListener('animationend', ()=>{
        animacionPresentacionTextoParte1(...elementos.texto1, elementos.texto2)
        elementos.texto2.addEventListener('animationend', ()=>{
            animacionPresentacionTextoParte2(...elementos.texto1, elementos.texto2)
            animacionPresentacionBotonContacto(elementos.boton)
            animacionPresentacionNombre(elementos.nombre)
        })
    })
}

function capturaElementosPresentacion(){
    return {
        figuras : document.querySelectorAll('.background__cuerposGeometricos'),
        puntos: document.querySelector('.background__puntos'),
        iconos: document.querySelector('.header__profesional'),
        texto1 : document.querySelectorAll('.header__saludoInicial'),
        texto2: document.querySelector('.header__subSaludoInicial'),
        boton: document.querySelector('.header__botonContacto'),
        nombre: document.querySelector('.titulo')
    }
}

function animacionPresentacionFigurasGeometricas(elementos){
    elementos.forEach(elemento => {
        elemento.style.animation = "geometrics .5s linear"
        elemento.style.right = "18%"
        setTimeout(()=>elemento.style.animation = "", 500)
        
    })
}

function animacionPresentacionPuntos(elemento){
    elemento.style.animation = "puntos .5s linear"
    elemento.style.top = "80%"
}

function animacionPresentacionIconosProfesional(elemento){
    elemento.style.animation = "iconos .5s ease-in"
    elemento.style.opacity = "1"
}

function animacionPresentacionTextoParte1(...elementos){
    elementos.forEach(elemento => {
        elemento.style.animation = "textoparte1 .5s ease-in"
        elemento.style.opacity = "1"
    })
}

function animacionPresentacionTextoParte2(...elementos){
    elementos.forEach(elemento => {
        elemento.style.animation = "textoparte2 .5s ease-in"
        elemento.style.transform = "translate(0,0) scale(1)"
    })
}

function animacionPresentacionBotonContacto(elemento){    
    elemento.style.animation = "boton .5s ease-in"
    elemento.style.opacity = "1"
}

function animacionPresentacionNombre(elemento){    
    elemento.style.animation = "nombre .5s ease-in"
    elemento.style.opacity = "1"
}