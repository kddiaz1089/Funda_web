const products = [
   
    { id: 1, name: 'GUAYOS Adidas X Crazyfast Messi.4', image: '../Imagenes/g1.JFIF', price: 500000, calidad: 'premium', talla: 32, color: 'GRIS' },
    { id: 2, name: 'GUAYOS adidas predator', image: '../Imagenes/g2.jpg', price: 300000, calidad: 'Medium', talla: 32, color: 'BLANCO' },
    { id: 3, name: 'GUAYOS Adidas predator mutador', image: '../Imagenes/g11.jpg', price: 200000, calidad: 'premium', talla: 32, color: 'BLANCO/NARANJA' },    // Add more products as needed
    { id: 4, name: 'GUAYOS NIKE MERCURIAL SUPERFLY', image: '../Imagenes/g4.jpg', price: 200000, calidad: 'premium', talla: 32, color: 'BLANCO/VERDE' },
    { id: 5, name: 'TGUAYOS NIKE TONY 2', image: '../Imagenes/g10.JFIF', price: 500000, calidad: 'premium', talla: 32, color: 'BLANCO/VERDE' },
    { id: 6, name: 'GUAYOS NIKE MERCURIAL VAPOR EUPHORIA', image: '../Imagenes/g12.JFIF', price: 3000000, calidad: 'Medium', talla: 32, color: 'BLANCO/DORADO' },
    { id: 7, name: 'GUAYOS PREDATOR', image: '../Imagenes/g6.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO/BLANCO' },    // Add more products as needed
    { id: 8, name: 'GUAYOS TONY 2', image: '../Imagenes/g7.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'BLANCO/GRIS' },
    { id: 9, name: 'GUAYOS NPUMA FUTURE Z', image: '../Imagenes/g13.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'BLANCO' },
    { id: 10, name: 'GUAYOS TONY 2', image: '../Imagenes/g8.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'BLANCO' },


    { id: 11, name: 'GUANTE PORTERO', image: '../Imagenes/gut1.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },    // Add more products as needed
    { id: 12, name: 'GUANTE PORTERO PUMA', image: '../Imagenes/gut2.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'BLANCO/ROJO' },
    { id: 13, name: 'GUANTE PORTERO', image: '../Imagenes/gut3.JFIF', price: 500000, calidad: 'premium', talla: 32, color: 'BLANCO/AZUL' },
    { id: 14, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut4.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO/VERDE' },
    { id: 15, name: 'GUANTE PORTERO PREDATOR', image: '../Imagenes/gut5.JFIF', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO/ROSA' },
    { id: 16, name: 'GUANTE PORTERO', image: '../Imagenes/gut6.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },
    { id: 17, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut7.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'VERDE' },
    { id: 18, name: 'GUANTE PORTERO WALON', image: '../Imagenes/gut8.PNG ', price: 3000000, calidad: 'Medium', talla: 32, color: 'NARANJA' },
    { id: 19, name: 'GUANTE PORTERO RAYO', image: '../Imagenes/gut9.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'BLANCO/ROJO' },    // Add more products as needed
    { id: 20, name: 'GUANTE PORTERO N Y K', image: '../Imagenes/gut10.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'BLANCO/ROJO' },



   
        { id: 21, name: 'Canilleras Nike Park Shield', image: '../Imagenes/can1.png', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO'},
        { id: 22, name: 'CANILLERA PROFESIONAL GOLTY', image: '../Imagenes/can2.png', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO'},
        { id: 23, name: 'CANILLERA MIYAGUI', image: '../Imagenes/can3.png', price: 200000, calidad: 'Low',  talla: 32, color: 'NEGRO' },    // Add more products as needed
        { id: 24, name: 'CANILLERA GOLTY', image: '../Imagenes/can4.png', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},
        { id: 25, name: 'CANILLERA ADIDAS PREDATOR', image: '../Imagenes/can5.png', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO'},
        { id: 26, name: 'CANILLERA NIKE J GUARD', image: '../Imagenes/can6.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO' },
        { id: 27, name: 'CANILLERA ADIDAS EVERLITE', image: '../Imagenes/can7.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},    // Add more products as needed
        { id: 28, name: 'CANILLERA  TIRO CLUB', image: '../Imagenes/can8.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },
        { id: 29, name: 'ESPINILLERA EMOTION NIKE', image: '../Imagenes/can9.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO' },
        { id: 30, name: 'ESPINILLERA CHARGE NIKE', image: '../Imagenes/can10.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO'},

        { id: 31, name: 'Balon baloncesto Wilson NBA', image: '../Imagenes/nba.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO'},
        { id: 32, name: 'TEAM ', image: '../Imagenes/nba2.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO' },
        { id: 33, name: 'LEKERS 23', image: '../Imagenes/nba3.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},    // Add more products as needed
        { id: 34, name: 'LEKERS 23', image: '../Imagenes/nba4.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},
        { id: 35, name: 'LEKERS 23 PERSONALIZADA', image: '../Imagenes/nba5.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO'},
        { id: 36, name: 'Nike Manguitos Tirador NBA 2.0', image: '../Imagenes/nba6.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO' },
        { id: 37, name: 'Nike Manguitos Tirador NBA 2.0', image: '../Imagenes/nba7.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},    // Add more products as needed
        { id: 38, name: 'LeBron Soldier BLUE', image: '../Imagenes/nba8.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO'},
        { id: 39, name: ' LeBron Soldier XII iD', image: '../Imagenes/nba9.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO'},
        { id: 40, name: 'JORDAN Pin en TU', image: '../Imagenes/nba10.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO'},
       
        
        { id: 41, name: 'Raqueta ', image: '../Imagenes/ten1.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },
        { id: 42, name: 'Wilson Burn Pink ', image: '../Imagenes/ten2.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO' },
        { id: 43, name: 'Raqueta Wilson Us Open Blx 100 Grip 2', image: '../Imagenes/ten3.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO' },
        { id: 44, name: 'Pelotas Tenis X3 Und', image: '../Imagenes/ten4.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },    // Add more products as needed
        { id: 45, name: 'Pelotas Tenis 1 Und', image: '../Imagenes/ten5.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },
        { id: 46, name: 'Pantaloneta Tennis Nike Azul', image: '../Imagenes/ten6.jpg', price: 500000, calidad: 'premium', talla: 32, color: 'NEGRO' },
        { id: 47, name: ' Nike Men', image: '../Imagenes/ten7.jpg', price: 3000000, calidad: 'Medium', talla: 32, color: 'NEGRO' },
        { id: 48, name: 'Nike Mujer', image: '../Imagenes/ten8.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' },    // Add more products as needed
        { id: 49, name: 'Artengo Ts130 negro', image: '../Imagenes/ten9.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' }, 
        { id: 50, name: ' Nike Court... - FAIR PLAY ', image: '../Imagenes/ten10.jpg', price: 200000, calidad: 'Low', talla: 32, color: 'NEGRO' }, 
];
const itemsPerPage = 10;

// Página actual que se mostrará inicialmente.
let currentPage = 1;

// Copia de todos los productos al principio para facilitar el filtrado.
let filteredProducts = products.slice();
// Función para renderizar las tarjetas de productos en la interfaz.
function renderProductCards() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);

    for (let i = startIndex; i < endIndex; i++) {
        const product = filteredProducts[i];
        const card = createProductCard(product);
        container.appendChild(card);
    }

    renderPagination();
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'ofer-1 articulo';
    card.innerHTML = `
        <div class="ofer-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="ofer-txt">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <p>Calidad: ${product.quality}</p>
            <p>Talla: ${product.talla}</p>
            <p>Color: ${product.color}</p>
            <button class="btn-2" onclick="handleProductActionWithLoading(this, 'details', ${product.id})"> Ver Detalle</button>
        </div>
    `;
    return card;
}

function handleProductActionWithLoading(button, action, productId) {
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Cargando...'; // Display a loading message
    loadingMessage.className = 'loading-message';

    const cardContainer = button.closest('.ofer-1.articulo');
    cardContainer.appendChild(loadingMessage);

    // Apply a 2-second delay using a promise and setTimeout
    const delay = 2000; // 2 seconds
    const delayPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });

    delayPromise.then(() => {
        // Remove the loading message
        cardContainer.removeChild(loadingMessage);
        handleProductAction(action, productId);
    });
}

// Rest of your code remains unchanged...


function handleProductAction(action, productId) {
    if (action === 'edit') {
        editProduct(productId);
    } else if (action === 'details') {
        showProductDetails(productId);
    }
}

function showProductDetails(productId) {
    const product = filteredProducts.find(product => product.id === productId);
    const popupContent = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>Precio: $${product.price}</p>
        <p>Calidad: ${product.quality}</p>
        <p>Talla: ${product.talla}</p>
        <p>Color: ${product.color}</p>
        <button class="btn-2" onclick="handleProductAction('edit', ${product.id})">Editar</button>
        <button class="btn-2" onclick="closePopup()">Exit</button>
    `;
    openPopup(popupContent);
}


function openPopup(content) {
    const popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = content;
    popupCard.style.display = 'block';
}



// Función para renderizar la paginación.
function renderPagination() {
    // Calcular el número total de páginas necesarias.
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Obtener el elemento de la paginación.
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Generar botones de página y agregar oyentes de eventos.
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderProductCards();
            renderPagination();
        });
        pagination.appendChild(pageButton);
    }
}

// Función para navegar a la página anterior.
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProductCards();
        renderPagination();
    }
}

// Función para navegar a la página siguiente.
function nextPage() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProductCards();
        renderPagination();
    }
}

// Función para filtrar los productos según el nombre ingresado.
function filterProducts() {
    const input = document.getElementById('productName').value.toLowerCase();
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));
    filteredProducts = products.filter(product => product.color.toLowerCase().includes(input));
    currentPage = 1;
    renderProductCards();
}

// Función para restablecer el filtro y mostrar todos los productos.
function resetFilter() {
    document.getElementById('productName').value = '';
    filteredProducts = products.slice(); // Restablecer a todos los productos
    currentPage = 1;
    renderProductCards();
}

// Función para editar un producto con el ID proporcionado.
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const newPrice = prompt('Ingrese el nuevo precio:');
        const newQuality = prompt('Ingrese la nueva calidad:');
        const newtalla = prompt('Ingrese la nueva talla:');
        const newcolor = prompt('Ingrese nuevo color');

        if (newPrice !== null && newQuality !== null && newtalla !== null && newcolor !== null) {
            // Actualizar el precio y la calidad del producto.
            product.price = parseFloat(newPrice);
            product.quality = newQuality;
            product.talla = parseInt(newtalla);
            product.color = newcolor;
            renderProductCards();
        }
    }
}

// Renderización inicial al cargar la página.
renderProductCards();

function openPopup(content) {
    const popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = content;
    popupCard.classList.add('active');
    popupCard.style.display = 'block';
}

function closePopup() { // cierra la ventana cuando se presiona el boton exit
    const popupCard = document.getElementById('popupCard');
    popupCard.classList.remove('active');
    setTimeout(() => {
        popupCard.style.display = 'none';
    }, 200); // Ajusta el tiempo de la transición
}
