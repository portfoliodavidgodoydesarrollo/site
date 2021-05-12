export default function misHabilidades(){

    window.addEventListener('scroll', () => {
        const rect = document.querySelector('.misHabilidadesAnimacion').getBoundingClientRect()
        
        if(rect.top <= 300){
            $(".misHabilidadesAnimacion" ).css ("transform","scale(1)")
            $(".misHabilidadesAnimacion" ).css ("opacity","1")
            $(".misHabilidadesAnimacion" ).css ("transition","1.5s")
            $("#misHabilidadesImagen" ).css ("transform","scale(1)")
            $("#misHabilidadesImagen" ).css ("position","absolute")
            $("#misHabilidadesImagen" ).css ("transition","1.5s")
    
        }
    }) 
    
}