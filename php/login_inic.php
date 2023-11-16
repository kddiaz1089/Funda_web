<?php
session_start();

include 'conexion.php';

function validarPassword($pass) {
    return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,}).{8,}$/', $pass)
        ? true
        : "La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y al menos 2 números.";
}

$correo = $_POST['correo'];
$pass = $_POST['pass'];

$passwordValidationResult = validarPassword($pass);

if ($passwordValidationResult !== true) {
    echo '<script>alert("Error: ' . $passwordValidationResult . '"); window.location="/Funda_web/login.html";</script>';
    exit;
}

$pass = hash('sha512', $pass);

$validar_login = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo='$correo' AND pass='$pass'");

if (mysqli_num_rows($validar_login) > 0) {
    $_SESSION['usuario'] = $correo;
    echo '<script>
    alert("Inicio de sesión exitoso. Redireccionando..."); 
    setTimeout(function()
    { window.location="/Funda_web/php/index.php"; }, 
    2000);</script>';
} else {
    echo '<script>alert("Usuario no existe, por favor verifique los datos ingresados. Redireccionando..."); 
    setTimeout(function()
    { window.location="/Funda_web/login.html"; }, 2000);</script>';
}

exit;
?>



