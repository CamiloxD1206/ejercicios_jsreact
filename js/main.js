// funcion normal
// function login(event) {
//     event.preventDefault();

//     let usuario = document.querySelector('#correo').value;
//     let clave = document.querySelector('#contra').value;


//     const correo = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-z]+/g;

//     if (!correo.test(usuario)) {
//         alert('Ingrese un correo electrónico válido');
//         return;
//     } else {
//         if (clave.length < 8) {
//             alert('La contraseña debe tener al menos 8 caracteres');
//         } else if (usuario === 'admin@misena.edu.co') {
//             document.body.style.backgroundColor = 'orange';
//         } else if (usuario === 'aprendiz@misena.edu.co') {
//             document.body.style.backgroundColor = 'blue';
//         } else {
//             document.body.style.backgroundColor = 'green';
//         }
//     }


// }
//funcion flecha

const boton = document.querySelector('#boton')
boton.addEventListener('click', () => {
    let usuario = document.querySelector('#correo').value;
    let clave = document.querySelector('#contra').value;

    const correo = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+\.[a-z]+/g;

    if (!correo.test(usuario)) {
        alert('Ingrese un correo electrónico válido');
        return;
    } else {
        if (clave.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres');
        } else if (usuario === 'admin@misena.edu.co') {
            document.body.style.backgroundColor = 'orange';
        } else if (usuario === 'aprendiz@misena.edu.co') {
            document.body.style.backgroundColor = 'blue';
        } else {
            document.body.style.backgroundColor = 'green';
        }
    }
})