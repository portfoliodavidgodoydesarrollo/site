export default function cargaProyectos(PATH){
    llamadaDatos(PATH)
        .then(json => renderizadoDeProyectos(json))
        .catch(alert)
}

async function llamadaDatos(PATH) {
    
    let respuesta = await fetch(PATH)

    if (respuesta.status == 200) {
        
        let json = await respuesta.json()

        return json
    }

    throw new Error(repsuesta.status)
}

function renderizadoDeProyectos(proyectos) {
    const cuerpoPortfolio = document.querySelector('.miPortfolio__cuerpo')
    
    proyectos.forEach((proyecto, indice) => {
        const card = crearCardProyecto(proyecto, indice)        
        card.style.opacity = "0"
        cuerpoPortfolio.append(card)     
        setTimeout(() => {
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