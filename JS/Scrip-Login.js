function login() {
    // simulate a 2-second login delay using a promise
    const loginDelay = new Promise((resolve) => setTimeout(resolve, 2000));

    loginDelay.then(() => {
        const loginForm = document.getElementById('login-form');
        const formData = new FormData(loginForm);

        // make an AJAX request to your login endpoint
        fetch('../Funda_web/php/login_inic.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // if the login is successful, redirect the user
                window.location.href = '../Funda_web/dashboard.php';
            } else {
                // if the login fails, display an error message
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            // if an error occurs during the AJAX request, display an error message
            alert('Error: ' + error.message);
        });
    });
}


const btnSingIn = document.getElementById("sing-in"),
      btnSingUp = document.getElementById("sing-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSingIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide"); // Corrected "remover" to "remove"
});

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide"); // 
});

