import Carrousel from "./carrousel.js"

const cardWidth = 15
const gapWidth = 12

export default function cargaProyectos(PATH){
    let flagBreakpoint = false
    let mobile = window.innerWidth > 992 ? 1 : window.innerWidth > 576 ? 2 : 3
    const flechasHTML = `
        <img src="./assets/icons/carrousel_arrow-l.svg" alt="izquierda" class="miPortfolio__flecha miPortfolio__flecha--izquierda">
        <img src="./assets/icons/carrousel_arrow-r.svg" alt="derecha" class="miPortfolio__flecha miPortfolio__flecha--derecha">`
    
    const cuerpoHTML = `
        <div class="miPortfolio__cuerpo">
        </div>`

    const container = document.querySelector('.miPortfolio__container')
    container.innerHTML = ""
    
    llamadaDatos(PATH)
        .then(json => {
            if(mobile == 1){
                container.innerHTML = `
                    ${flechasHTML} \n
                    ${cuerpoHTML}`
                renderizadoDeProyectos(json) 
                crearCarrousel(json, cardWidth, gapWidth)
            }
            else if(mobile == 2){                
                container.innerHTML = `
                    ${cuerpoHTML}`
                document.querySelector('.miPortfolio__cuerpo').style.height = `${33+36*(json.length)/2}vw`
                renderizadoDeProyectos(json) 
            }
            else{        
                container.innerHTML = `
                    ${cuerpoHTML}`
                document.querySelector('.miPortfolio__cuerpo').style.height = `${40.33+52.33*(json.length-1)}vw`
                renderizadoDeProyectos(json) 
            }
        })
        .catch(alert)      

    window.addEventListener('resize', ()=>{
        if(mobile != (window.innerWidth > 992 ? 1 : window.innerWidth > 576 ? 2 : 3)){
            flagBreakpoint = true
            mobile = window.innerWidth > 992 ? 1 : window.innerWidth > 576 ? 2 : 3
        }
        else{
            flagBreakpoint = false
        }

        if(flagBreakpoint){
            cargaProyectos(PATH)
            flagBreakpoint = false
        }
    })
}

async function llamadaDatos(PATH) {
    
    let respuesta = await fetch(PATH)

    if (respuesta.status == 200) {
        
        let json = await respuesta.json()

        return json
    }

    throw new Error(respuesta.status)
}

function renderizadoDeProyectos(proyectos) {
    const cuerpoPortfolio = document.querySelector('.miPortfolio__cuerpo')
    
    proyectos.forEach((proyecto, indice) => {
        setTimeout(() => {
        const card = crearCardProyecto(proyecto, indice)        
        card.style.opacity = "0"
        cuerpoPortfolio.append(card)     
            setTimeout(() => {
                card.style.opacity = "1"
            }, 100)
        },400*indice)
    });
}

function crearCardProyecto(proyecto, indice){
    const card = document.createElement('div')
    card.classList.add("miPortfolio__card", indice % 2 == 0 ? "miPortfolio__card--down" : "miPortfolio__card--up")
    card.style.backgroundImage = `url(${proyecto.imagen})`

    const cardGradient = document.createElement('div')
    cardGradient.classList.add("miPortfolio__cardGradient")    

    const cardContainer = document.createElement('div')
    cardContainer.classList.add("miPortfolio__cardContainer")

    const cardLink = document.createElement('a')
    cardLink.classList.add("miPortfolio__cardLink")        
    cardLink.setAttribute('href', proyecto.url)

    const cardText = document.createElement('p')
    cardText.innerText = "CONOCER MÁS"

    const cardIcon = document.createElement('img') 
    cardIcon.setAttribute('src', "./assets/icons/arrow_up_card.svg")   
    cardIcon.setAttribute('alt', "conocer mas")

    const cardTitle = document.createElement('p')
    cardTitle.classList.add("miPortfolio__cardTitle")    
    cardTitle.innerText = proyecto.titulo

    cardLink.append(cardText, cardIcon)
    cardContainer.append(cardLink, cardTitle)
    card.append(cardGradient)    
    card.append(cardContainer)
    
    hoverCards(card, cardLink, cardGradient, cardTitle, cardLink, cardGradient, cardTitle)

    return card
}

function hoverCards(card, cardLink, cardGradient, cardTitle, ...elementos){
    elementos.forEach(elemento => {
        elemento.addEventListener('mouseover', () => {
            cardLink.style.transform = `translateY(${-card.offsetHeight*.8}px)`
            cardGradient.style.opacity = ".8"
            cardTitle.style.opacity = "1"
        })
        elemento.addEventListener('mouseout', () => {
            cardLink.style.transform = "translateY(0)"
            cardGradient.style.opacity = "0"
            cardTitle.style.opacity = "0"
        })
    })
}

function crearCarrousel(proyectos, cardWidth, gapWidth){
    /* Creación objeto Carrousel */
    const carrousel = new Carrousel(proyectos, cardWidth, gapWidth)

    /* Captura contenedor de cards */
    const cuerpoCarrousel = document.querySelector('.miPortfolio__cuerpo')

    /* Asignación de ancho según cantidad de proyectos y posicion inicial*/
    cuerpoCarrousel.style.width = `${carrousel.width}vw`
    cuerpoCarrousel.style.transform = `translateX(-${carrousel.posicion}vw)`

    /* Captura de flechas y asignación de metodo correspondiente */
    const flechaIzquierda = document.querySelector('.miPortfolio__flecha--izquierda')
    flechaIzquierda.style.opacity = '1'
    flechaIzquierda.addEventListener('click', ()=>{
        carrousel.atrasarUnCard()
        cuerpoCarrousel.style.transform = `translateX(-${carrousel.posicion}vw)`
    })
    
    const flechaDerecha = document.querySelector('.miPortfolio__flecha--derecha')
    flechaDerecha.style.opacity = '1'
    flechaDerecha.addEventListener('click', ()=>{
        carrousel.adelantarUnCard()
        cuerpoCarrousel.style.transform = `translateX(-${carrousel.posicion}vw)`
    })

    return carrousel
}
