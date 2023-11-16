<?php

include 'conexion.php';

function validarContrasena($pass) {
        // Longitud mínima de 8 caracteres
        if (strlen($pass) < 8) {
            return false;
        }
    
        // Contiene al menos una letra minúscula
        if (!preg_match('/[a-z]/', $pass)) {
            return false;
        }
    
        // Contiene al menos una letra mayúscula
        if (!preg_match('/[A-Z]/', $pass)) {
            return false;
        }
    
        // Contiene al menos dos dígitos
        if (!preg_match('/[0-9].*[0-9]/', $pass)) {
            return false;
        }
    
        // Además, permite más de 7 caracteres especiales
        if (!preg_match('/[@*%!]{4,}/', $pass)) {
                return false;
            }
    
        // La contraseña cumple con todos los requisitos
        return true;
    }

 $nombre_completo = $_POST['nombre_completo'];
 $correo = $_POST['correo'];
 $usuario = $_POST['usuario'];
 $pass = $_POST['pass'];
 $pass = hash('sha512',$pass);
 
     
 echo '
 <script>
 // Display an error message with details about the password requirements
 alert("Error: La contraseña debe tener al menos 8 caracteres, una minúscula, una mayúscula y al menos 2 números.");
 // Redirect back to the registration form
 window.location="/Funda_web/login.html";
 </script>';
// Exit the script to prevent further execution
exit();

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

// Cierra la conexión
mysqli_close($conexion);


?>