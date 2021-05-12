import cargaProyectos from "./carga_proyectos.js"

export default function animacionMiPortfolio(PATH){
    const elementos = capturaElementosMiPortfolio()
    animacionMiPortfolioTexto(elementos.titulo,elementos.subtitulo)
    elementos.subtitulo.addEventListener('animationend', ()=>{
        cargaProyectos(PATH)
    })
}

function capturaElementosMiPortfolio(){
    return {
        titulo : document.querySelector('.miPortfolio__titulo'),
        subtitulo: document.querySelector('.miPortfolio__subtitulo')
    }
}

function animacionMiPortfolioTexto(...elementos){
    elementos.forEach(elemento => {
        elemento.style.animation = "textomiportfolio .5s"
        elemento.style.transform = "translate(0,0) scale(1)"
        elemento.style.opacity = "1"
    })
}