<?php
session_start();

include 'conexion.php';

function validarPassword($pass) {
    if (strlen($pass) < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }
    
    if (!preg_match('/[a-z]/', $pass)) {
        return "La contraseña debe contener al menos una letra minúscula.";
    }
    
    if (!preg_match('/[A-Z]/', $pass)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }
    
    if (preg_match_all('/\d/', $pass) < 2) {
        return "La contraseña debe contener al menos 2 números.";
    }
    
    return true;
}

$correo = $_POST['correo'];
$pass = $_POST['pass'];

$validarPassword = validarPassword($pass);

if ($validarPassword !== true) {
    echo '<script>alert("Error: ' . $validarPassword . '"); window.location="/Funda_web/login.html";</script>';
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