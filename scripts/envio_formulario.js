export default function envioFormulario(){
    const formulario = capturaNodosForm()
    formulario.addEventListener('submit',function(evento){
        evento.preventDefault()

        const formData = new FormData(formulario)

        fetch('enviar.php', {
            method: 'POST',
            body: formData
        })
        .then(respuesta => console.log(respuesta))
        .catch(error => alert(error))
    })
}

function capturaNodosForm(){

    const formNode = document.querySelector('.contacto__form')

    return formNode
}