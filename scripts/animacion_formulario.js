export default function animacionFormulario(){

    window.addEventListener('scroll', () => {
        const rect = document.querySelector('.contacto__gMapsBotonTexto').getBoundingClientRect()
        
        if(rect.top <= 300){
            $("#contacto__form" ).css ("transform","scale(1)")
            $("#contacto__form" ).css ("transition","1.5s")

        }
    }) 

}