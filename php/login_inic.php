<?php
session_start();
include 'conexion.php';

function validatePassword($password) {
    // Minimum 8 characters, at least one lowercase and one uppercase letter, at least 2 numbers
    return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,}).{8,}$/', $password);
}
$correo = $_POST['correo'];
$pass = $_POST['pass'];
$pass = hash('sha512', $pass);

$validar_login = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo='$correo'
and pass='$pass'");
if(mysqli_num_rows($validar_login)>0){
    $_SESSION['usuario']=$correo;
    header("location:/Funda_web/php/index.php");
    exit;
}else{
    echo'
    <script>
    alert("usuario no existe, por faovr verifique los datos ingresados");
    window.location="/Funda_web/login.html"
        </script>';
exit;
}

?>