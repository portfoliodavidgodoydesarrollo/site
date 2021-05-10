
$(document).ready(function(){
$('#sobreMi').scroll(function(){
    $("#sobreMi__titulosCuerpo").css("transform", "scale(0.5)")
   $("#sobreMi__titulosCuerpo").css("transition" , "5s")
});
})


function load(){
    $("#background").css("right", "0%")
    $("#background").css("transition", "3s")
    
}

window.onload = load;



/* ScrollReveal().reveal('#sobreMi', {delay: 1000}); */

/* 
.sobreMi__titulosCuerpo{
    transform: translate(50px, 50px);
    transform: scale(0.5);
    transition: 5s;
    
   } */

   //evento


   /* $("#sobreMi").on( 'scroll', function(){
       console.log("hola");
   $("#sobreMi__titulosCuerpo").css("transform", "scale(0.5)")
   $("#sobreMi__titulosCuerpo").css("transition" , "5s")
   }); */


   
  