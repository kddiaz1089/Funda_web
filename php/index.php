<?php
session_start();
if (isset($_SESSION['error_message'])) {
    echo '<div class="error-message">' . $_SESSION['error_message'] . '</div>';
    unset($_SESSION['error_message']);
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Página</title>
    <link rel="stylesheet" href="../CSS/stilo.css">
</head>

<body>
    <!-- Encabezado -->
    <header class="header">
        <main class="menu container">
            <img class="logo" src="../Imagenes/logo.png" style="width: 6%; height: auto;">
            <input type="checkbox" id="menu" />
            <label for="menu">
                <img src="../Imagenes/menu.png" class="menu-icono" alt="menu">
            </label>

            <!-- Menú de Navegación -->
            <nav class="navbar">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <!-- Botón de Cerrar Sesión -->
            <ul>
                <li>
                    <div>
                        <form action="/Funda_web/php/cerrar_sesion.php" method="post">
                            <button type="submit" class="btn-2">Cerrar Sesión</button>
                        </form>
                    </div>
                </li>
            </ul>
        </main> <!-- Cierre del contenedor del menú -->

        <!-- Contenido del Encabezado -->
        <div class="header-content container">
            <div class="header-img">
                <img src="../Imagenes/right.png" alt="">
            </div>
            <div class="header-txt">
                <h1>Ofertas especiales</h1>
                <p>Estrena los mejores articulos</p>
                <h2>¡siuuuuuuu!</h2>
                <a href="#" class="btn-1">Información</a>
            </div>
        </div>
    </header>

    <!-- Filtro de Productos -->
    <div id="filter-container">
        <label class="ofer-txt art" for="productName">Nombre Del Articulo</label>
        <input type="text" id="productName" oninput="filterProducts()">
        <button class="btn-2" onclick="resetFilter()">Borrar Filtro</button>
        
    </div>

    <!-- Contenido Principal de Productos -->
    <main class="products container product-content precio" id="product-container"> </main>

    <!-- Paginación -->
    <div id="pagination"></div>
    <div id="nav-buttons">
        <button class="btn-2" onclick="prevPage()">Atrás</button>
        <!-- Add this button in your HTML -->
<button id="nextPageButton" class="btn-2"onclick="nextPage()">Siguiente</button>

    </div>
    <div id="pageInfo"></div>

    <!-- Popup de Tarjeta -->
    <div id="popupCard"></div>

    <!-- Pie de Página -->
    <footer class="footer">
        <div class="footer-content container">
            <!-- Enlaces de Productos -->
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

            <!-- Enlaces de Deportes -->
            <div class="link">
                <h3>DEPORTES</h3>
                <ul>
                    <li><a href="">Futbol</a></li>
                    <li><a href="">Baloncesto</a></li>
                    <li><a href="">Tenis</a></li>
                    <li><a href="">lorem</a></li>
                </ul>
            </div>

            <!-- Enlaces de Asistencia -->
            <div class="link">
                <h3>ASISTENCIA</h3>
                <ul>
                    <li><a href="">Dudas Frecuentes</a></li>
                    <li><a href="">Guía de Talla</a></li>
                    <li><a href="">Realizar Pedido</a></li>
                    <li><a href="">Ventas por Whatsapp</a></li>
                </ul>
            </div>

            <!-- Información de la Empresa -->
            <div class="link">
                <h3>INFORMACIÓN DE LA EMPRESA</h3>
                <ul>
                    <li><a href="">K.D Moda Deportiva </a></li>
                    <li><a href="">Trabaja en Nuestro Equipo</a></li>
                </ul>
            </div>

            <!-- Redes Sociales -->
            <div class="link">
                <h3>SÍGUENOS</h3>
                <ul>
                    <li><i class='bx bxl-facebook-square bx-md' style='color:#3368ff'></i></li>
                    <li><i class='bx bxl-instagram bx-md' style='color:rgba(224,118,14,0.95)'></i></li>
                    <li><i class='bx bxl-twitter bx-md' style='color:rgba(76,183,255,0.95)'></i></li>
                    <li><i class='bx bxl-youtube bx-md' style='color:rgba(234,14,14,0.95)'></i></li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="../JS/Produc.js"></script>
    <script src="../JS/scrip.js"></script>

</body>

</html>
