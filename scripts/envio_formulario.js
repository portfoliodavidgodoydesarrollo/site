export default function envioFormulario(){
    const formulario = capturaNodosForm()
    formulario.addEventListener('submit',function(evento){
        evento.preventDefault()

        const formData = new FormData(formulario)
        const datos = {
            nombre: formData.get('nombre'),
            mail: formData.get('mail'),
            asunto: formData.get('asunto'),
            cuentame: formData.get('cuentame')
        }

        fetch('../index.php', {
            method: 'POST',
            body: datos
        })
    })
}

function capturaNodosForm(){

    const formNode = document.querySelector('.contacto__form')

    return formNode
}