const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit',impedir)

function impedir (event) {
    event.preventDefault ();
    const email = formulario.elements['email'].value
    const nome = formulario.elements['name'].value
    const mensagem = formulario.elements['message'].value

    const result = `email: ${email} nome: ${nome} mensagem: ${mensagem}`

    alert(result);
};