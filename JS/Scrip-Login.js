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

