export default function envioFormulario(){
    const formulario = capturaNodosForm()
    escuchaEventoForm(formulario)

}

function capturaNodosForm(){

    const formNode = document.querySelector('.contacto__form')

    return formNode
}

function escuchaEventoForm(formulario){
    formulario.addEventListener('submit',function(evento){
        evento.preventDefault()

        const formData = new FormData(formulario)

        fetch('enviar.php', {
            method: 'POST',
            body: formData
        })
            .then(() => alert(`Gracias ${formData.get('nombre')}. El correo se ha enviado con éxito.`))
            .catch(error => alert(error))
    })
}