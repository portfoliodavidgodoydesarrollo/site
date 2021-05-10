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
        crearCardProyecto(proyecto, indice, cuerpoPortfolio)
    });
}

function crearCardProyecto(proyecto, indice, cuerpo){
    const card = document.createElement('div')
    card.classList.add("miPortfolio__card", indice % 2 == 0 ? "miPortfolio__card--down" : "miPortfolio__card--up")
    card.style.backgroundImage = `url(${proyecto.imagen})`

    const cardGradient = document.createElement('div')
    cardGradient.classList.add("miPortfolio__cardGradient")

    const cardLink = document.createElement('a')
    cardLink.classList.add("miPortfolio__cardLink")        
    cardLink.setAttribute('href', proyecto.url)

    const cardText = document.createElement('p')
    cardText.classList.add("miPortfolio__cardText")
    cardText.innerText = "CONOCER MÁS"

    const cardIcon = document.createElement('img')
    cardIcon.classList.add("miPortfolio__cardIcon")     
    cardIcon.setAttribute('src', "./assets/icons/arrow_up_card.svg")   
    cardIcon.setAttribute('alt', "conocer mas")

    cardLink.append(cardText, cardIcon)
    cardGradient.append(cardLink)
    card.append(cardGradient)

    cuerpo.append(card)
}