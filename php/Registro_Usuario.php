<?php

include 'conexion.php';

 $nombre_completo = $_POST['nombre_completo'];
 $correo = $_POST['correo'];
 $usuario = $_POST['usuario'];
 $pass = $_POST['pass'];


 // Validar la contraseña
if (!validarContrasena($pass)) {
    echo '
        <script>
        alert("La contraseña no cumple con los requisitos mínimos.");
        window.location="/Funda_web/login.html";
        </script>';
    exit();
}
$pass = hash('sha512',$pass);
 
 $query = "INSERT INTO usuario(nombre_completo, correo, usuario, pass)
         VALUES('$nombre_completo','$correo','$usuario','$pass')";

         //verificar correo 

         $verificar_correo = mysqli_query ($conexion, "SELECT * FROM usuario WHERE correo = '$correo' " );
         if(mysqli_num_rows($verificar_correo)>0){
         echo '
         <script>
         alert("El correo ya esta registrado, intenta con otro diferente");
         window.location="/Funda_web/login.html"
         </script>';
         exit();
        }
        

        $verificar_usuario = mysqli_query ($conexion, "SELECT * FROM usuario WHERE usuario = '$usuario' " );
        if(mysqli_num_rows($verificar_usuario)>0){
        echo '
        <script>
        alert("El nombre de usuario ya esta en uso, intenta nombre de usuario diferente");
        window.location="/Funda_web/login.html"
        </script>';
        exit();
       }
      

         $ejecutar=mysqli_query($conexion, $query);

        
         if($ejecutar){
         echo'<script>
        alert("ususario almacenado de forma correcta");
        window.location="/Funda_web/login.html"
        </script>';
}
// Función para validar la contraseña
function validarContrasena($pass) {
    // Mínimo 8 caracteres, al menos una minúscula, una mayúscula y dos números
    $patron = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[a-zA-Z\d!@#$%^&*()-_+=<>?.,;:]{8,}$/';
    return preg_match($patron, $pass);
}

// Cierra la conexión
mysqli_close($conexion);


?>