<!-- <?php
session_start();
if(!isset($_SESSION['usuario'])){
    echo'
    <script>
    alert("por favor debes iniciar sesion");
    window.location="../login.html";
    </script>
    ';
   //header("location:../php/login.html")
    session_destroy();
    die();   
}
?> -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Pagina</title>
    <link rel="stylesheet" href="../CSS/stilo.css">
</head>
<body>
    <header class="header">
        <main class="menu container">
           <!--  <a href="../Imagenes/libre.gif" class="logo"> -->
            <img class="logo" src="../Imagenes/logo.png" style="width: 6%; height: auto;" >
            
            <input type="checkbox" id="menu"/>
            <label for="menu">
                <img src="../Imagenes/menu.png" class="menu-icono" alt="menu">
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>

                </ul>

            </nav>
             <div>
                <ul>
                    <li class="submenu">
                        <img src="../Imagenes/car.svg"  img="img-carrito" alt="icarrito">
                        <div id="carrito">
                            <table id="lista-carrito">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <a href="" id="vaciar-carrito" class="btn-2">Vaciar carrito</a>              
                        </div>                       
                    </li>
                </ul> 
                </div>

                <ul>
                    <li>
                        <div> 
                            <form action="/Funda_web/php/cerrar_sesion.php" method="post">
                            <button href="#" type="submit" class="btn-2">Cerrar Sesion</a>
                            </form>
                        
                        </div>
                    </li>
                </ul>
        </main> <!-- cierre contenedor del nav-->
        

        <div class="header-content container">
            <div class="header-img">
                <img src="../Imagenes/right.png" alt="">
            </div>
            <div class="header-txt">
                <h1>Ofertas especiales</h1>
                <p>Estrena las mejores prendas</p>
                <a href="#" class="btn-1">Informacion</a>
            </div>
        </div>
    </header>

    <div id="filter-container">
        <label class="ofer-txt" for="productName">Nombre Del Articulo</label>
        <input type="text" id="productName" oninput="filterProducts()">
        <button class="btn-2" onclick="resetFilter()">Borrar Filtro</button>
    </div>



    <main class="products container product-content precio" id="product-container"> </main>
        <!-- <ul class="pagination" id="pagination"></ul> -->
        
        <div id="pagination"></div>

        <div id="nav-buttons">
        <button class="btn-2" onclick="prevPage()">Atras</button>
        <button class="btn-2" onclick="nextPage()">Siguiente</button>
        </div>

    <footer class="footer">
        <div class="footer-content container">
            <div class="link">
                <h3>PRODUCTOS</h3>
                <ul>
                    <li><a href="">Guayos</a></li>
                    <li><a href="">Canilleras</a></li>
                    <li><a href="">Balon de futbol</a></li>
                    <li><a href="">Balon de baloncesto</a></li>
                    <li><a href="">Raqueta</a></li>
                </ul>
            </div>

            <div class="link">
                <h3>DEPORTES</h3>
                <ul>
                    <li><a href="">Futbol</a></li>
                    <li><a href="">Baloncesto</a></li>
                    <li><a href="">Tenis</a></li>
                    <li><a href="">lorem</a></li>
                </ul>
            </div>

            <div class="link">
                <h3>ASISTENCIA</h3>
                <ul>
                    <li><a href="">Dudas Frecuentes</a></li>
                    <li><a href="">Guia de talla</a></li>
                    <li><a href="">Realizar Pedido</a></li>
                    <li><a href="">Ventas por Whatsapp</a></li>
                </ul>
            </div>

            <div class="link">
                <h3>INFORMACIÓN DE LA EMPRESA</h3>
                <ul>
                    <li><a href="">K.D Moda Deportiva </a></li>
                    <li><a href="">Trabaja en Nuestro Equipo</a></li>
                </ul>
            </div>

            <div class="link">
                <h3>SÍGUENOS</h3>
                <ul>
                
                <li><i class='bx bxl-facebook-square bx-md' style='color:#3368ff'  ></i></li>               
                    <li><i class='bx bxl-instagram bx-md' style='color:rgba(224,118,14,0.95)'  ></i></li>
                    <li><i class='bx bxl-twitter bx-md' style='color:rgba(76,183,255,0.95)'  ></i></li>
                    <li><i class='bx bxl-youtube bx-md' style='color:rgba(234,14,14,0.95)'  ></i></li>
                </ul>
            </div>
        </div>
    </footer> 
    <script src="../JS/Produc.js"></script>
    <script src="../JS/scrip.js"></script>

</body>
</html>