export default function animacionSobreMi(){
    
window.addEventListener('scroll', () => {
    const rect = document.querySelector('.sobreMi').getBoundingClientRect()
    
    if(rect.top <= 300){
        $(".sobreMiAnimado" ).css ("transform","scale(1)")
        $(".sobreMiAnimado" ).css ("opacity","1")
        $(".sobreMiAnimado" ).css ("transition","1.5s")
        $(".sobreMi__imagen").css ("transform","scale(1)")
        $(".sobreMi__imagen").css ("transition","1.5s")        
        $(".sobreMi__imagen" ).css ("opacity","1")
        
    }
}) 
}