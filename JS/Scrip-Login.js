// Función de inicio de sesión
function login() {
    // Simular un retraso de inicio de sesión de 2 segundos utilizando una promesa
    const loginDelay = new Promise((resolve) => setTimeout(resolve, 2000));

    // Esperar a que se resuelva la promesa de retraso de inicio de sesión
    loginDelay.then(() => {
        // Obtener el formulario de inicio de sesión por su ID
        const loginForm = document.getElementById('login-form');
        // Crear un objeto FormData con los datos del formulario
        const formData = new FormData(loginForm);

        // Realizar una solicitud AJAX a tu punto final de inicio de sesión
        fetch('/php/login_inic.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Si el inicio de sesión es exitoso, redirigir al usuario
            if (data.success) {
                window.location.href = '/php/index.php';
            } else {
                // Si el inicio de sesión falla, mostrar un mensaje de error
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            // Si ocurre un error durante la solicitud AJAX, mostrar un mensaje de error
            alert('Error: ' + error.message);
        });
    });
}

// Obtener referencias a elementos HTML relevantes
const btnSingIn = document.getElementById("sing-in"),
      btnSingUp = document.getElementById("sing-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

// Agregar un evento de escucha al botón de inicio de sesión para cambiar a la forma de inicio de sesión
btnSingIn.addEventListener("click", e => {
    // Ocultar el formulario de registro
    formRegister.classList.add("hide");
    // Mostrar el formulario de inicio de sesión
    formLogin.classList.remove("hide");
});

// Agregar un evento de escucha al botón de registro para cambiar a la forma de registro
btnSingUp.addEventListener("click", e => {
    // Ocultar el formulario de inicio de sesión
    formLogin.classList.add("hide");
    // Mostrar el formulario de registro
    formRegister.classList.remove("hide");
});


