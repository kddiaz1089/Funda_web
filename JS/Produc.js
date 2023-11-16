/* function simulateLogin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
const products = [
    { name: "Adidas X Crazyfast Messi.4", image: "https://example.com/g1.jfif" },
    { name: "Producto 2", image: "" },
    { name: "Producto 3", image: "https://example.com/g3.jpg" },
    { name: "GUAYOS NIKE MERCURIAL SUPERFLY", image: "", quality: "calidad premium", price: "$200000" },
    // Add more products as needed
];
// Function to render products in the offer section
function renderOfferSection() {
    const oferContainer = document.getElementById("ofer-container");

    products.slice(0, 3).forEach((product, index) => {
        const oferArticle = document.createElement("article");
        oferArticle.classList.add("ofer-1", "articulo");

        oferArticle.innerHTML = `
            <div class="ofer-img">
                <img src="${product.image}" alt="">
            </div>
            <div class="ofer-txt">
                <h3>${product.name}</h3>
                <a href="#" class="btn-2">Informacion</a>
            </div>
        `;

        oferContainer.appendChild(oferArticle);
    });
}
function renderProductList() {
    const productList = document.getElementById("lista-1");

    products.slice(3).forEach((product, index) => {
        const productArticle = document.createElement("article");
        productArticle.classList.add("product", "articulo");

        productArticle.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="product-txt">
                <h3>${product.name}</h3>
                ${product.quality ? `<p>${product.quality}</p>` : ''}
                ${product.price ? `<p class="precio">${product.price}</p>` : ''}
                <button class="editar-producto btn-2" data-id="${index}">Editar</button>
                <a href="" class="agregar-carrito btn-2" data-id="${index}">Agregar al carrito</a>
            </div>
        `;

        productList.appendChild(productArticle);
    });
}

// Simulate login with a 2-second delay before rendering the products
simulateLogin().then(() => {
    renderOfferSection();
    renderProductList();
}); */

/* const products = [
    { id: 1, image: 'https://t-static.dafiti.com.br/3fLmfLbKws6anqSypvYE4XOgh9s=/400x580/smart/filters:quality(90)/static.dafiti.com.co/p/adidas-2091-7248032-2-product.jpg', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    { id: 1, image: 'https://via.placeholder.com/150', description: 'Product 1', price: 10, quality: 'premium' },
    
    // Add more products as needed
  ];

  const itemsPerPage = 10;
  let currentPage = 1;

  function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
      const product = products[i];
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.description}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Quality: ${product.quality}</p>
        <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
      `;
      container.appendChild(card);
    }
  }

  function renderPagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.innerText = i;
      li.addEventListener('click', () => {
        currentPage = i;
        renderProducts();
      });
      pagination.appendChild(li);
    }
  }

  function login() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';

    // Simulating a 2-second login promise
    setTimeout(() => {
      renderProducts();
      renderPagination();
    }, 2000);
  }

  function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    const newPrice = prompt('Enter the new price:', product.price);
    const newQuality = prompt('Enter the new quality:', product.quality);

    if (newPrice !== null && newQuality !== null) {
      product.price = parseFloat(newPrice);
      product.quality = newQuality;
      renderProducts();
    }
  }

  // Display login form initially
  document.getElementById('login-form').style.display = 'block';
 */

  const products = [
    { id: 1, name: 'GUAYOS Adidas X Crazyfast Messi.4', image: '../Imagenes/g1.JFIF', price: 500000, quality: 'premium',color: 'GRIS' },
    { id: 2, name: 'GUAYOS adidas predator', image: '../Imagenes/g2.jpg', price: 300000, quality: 'Medium',color: 'BLANCO'  },
    { id: 3, name: 'GUAYOS Adidas predator mutador', image: '../Imagenes/g11.jpg', price: 200000, quality: 'premium',color: 'BLANCO/NARANJA' },    // Add more products as needed
    { id: 3, name: 'GUAYOS NIKE MERCURIAL SUPERFLY', image: '../Imagenes/g4.jpg', price: 200000, quality: 'premium', color: 'BLANCO/VERDE'},
    { id: 4, name: 'TGUAYOS NIKE TONY 2', image: '../Imagenes/g10.JFIF', price: 500000, quality: 'premium', color: 'BLANCO/VERDE' },
    { id: 5, name: 'GUAYOS NIKE MERCURIAL VAPOR EUPHORIA', image: '../Imagenes/g12.JFIF', price: 3000000, quality: 'Medium', color: 'BLANCO/DORADO' },
    { id: 6, name: 'GUAYOS PREDATOR', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low', color: 'NEGRO/BLANCO' },    // Add more products as needed
    { id: 7, name: 'GUAYOS TONY 2', image: '../Imagenes/g7.jpg', price: 200000, quality: 'Low', color: 'BLANCO/GRIS' },
    { id: 8, name: 'GUAYOS NPUMA FUTURE Z', image: '../Imagenes/g13.jpg', price: 500000, quality: 'premium', color: 'BLANCO' },
    { id: 9, name: 'GUAYOS TONY 2', image: '../Imagenes/g8.jpg', price: 3000000, quality: 'Medium', color: 'BLANCO' }, 

   /*  PRODUCTOS DE GUANTES */

    { id: 10, name: 'GUANTE PORTERO', image: '../Imagenes/gut1.jpg', price: 200000, quality: 'Low', color: 'NEGRO' },    // Add more products as needed
    { id: 11, name: 'GUANTE PORTERO PUMA', image: '../Imagenes/gut2.jpg', price: 200000, quality: 'Low', color: 'BLANCO/ROJO' },
    { id: 12, name: 'GUANTE PORTERO', image: '../Imagenes/gut3.JFIF', price: 500000, quality: 'premium', color: 'BLANCO/AZUL' },
    { id: 13, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut4.jpg', price: 3000000, quality: 'Medium', color: 'NEGRO/VERDE' },
    { id: 14, name: 'GUANTE PORTERO PREDATOR', image: '../Imagenes/gut5.JFIF', price: 200000, quality: 'Low', color: 'NEGRO/ROSA' }, 
    { id: 15, name: 'GUANTE PORTERO', image: '../Imagenes/gut6.jpg', price: 200000, quality: 'Low', color: 'NEGRO' },
    { id: 16, name: 'GUANTE PORTERO GOLTY', image: '../Imagenes/gut7.jpg', price: 500000, quality: 'premium', color: 'VERDE' },
    { id: 17, name: 'GUANTE PORTERO WALON', image: '../Imagenes/gut8.PNG ', price: 3000000, quality: 'Medium', color: 'NARANJA' },
    { id: 18, name: 'GUANTE PORTERO RAYO', image: '../Imagenes/gut9.jpg', price: 200000, quality: 'Low', color: 'BLANCO/ROJO' },    // Add more products as needed
    { id: 19, name: 'GUANTE PORTERO N Y K', image: '../Imagenes/gut10.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },

       /*  PRODUCTOS DE CANILLERAS */


/* 
    { id: 20, name: 'Canilleras Nike Park Shield', image: '../Imagenes/can1.png', price: 500000, quality: 'premium', talla: 32, color: 'NEGRO'},
    { id: 21, name: 'CANILLERA PROFESIONAL GOLTY', image: '../Imagenes/can2.png', price: 3000000, quality: 'Medium', color: 'NEGRO/BLACO' },
    { id: 22, name: 'CANILLERA MIYAGUI', image: '../Imagenes/can3.png', price: 200000, quality: 'Low', color: 'BLANCO' },    // Add more products as needed
    { id: 23, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },
    { id: 24, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium', color: 'NEGRO/AZUL' },
    { id: 25, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium', color: 'NEGRO/AZUL' },
    { id: 26, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },    // Add more products as needed
    { id: 27, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },
    { id: 28, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium', color: 'NEGRO/AZUL' },
    { id: 29, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium', color: 'NEGRO/AZUL' },
    { id: 30, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },    // Add more products as needed
    { id: 31, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },

    { id: 1, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium', color: 'NEGRO/AZUL' },
    { id: 2, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium', color: 'NEGRO/AZUL' },
    { id: 3, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },    // Add more products as needed
    { id: 3, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low', color: 'NEGRO/AZUL' },
    { id: 1, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium', color: 'NEGRO/AZUL' },
    { id: 2, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium' },
    { id: 3, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low' },    // Add more products as needed
    { id: 3, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low' },
    { id: 1, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium' },
    { id: 2, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium' },
    { id: 3, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low' },    // Add more products as needed
    { id: 3, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low' },
    { id: 1, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium' },
    { id: 2, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium' },
    { id: 3, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low' },    // Add more products as needed
    { id: 3, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low' },
    { id: 1, name: 'Adidas X Crazyfast Messi.4', image: '../Imagenes/g4.jpg', price: 500000, quality: 'premium' },
    { id: 2, name: 'Product 2', image: '../Imagenes/g7.jpg', price: 3000000, quality: 'Medium' },
    { id: 3, name: 'Product 3', image: '../Imagenes/g6.jpg', price: 200000, quality: 'Low' },    // Add more products as needed
    { id: 3, name: 'Product 3', image: '../Imagenes/g8.jpg', price: 200000, quality: 'Low' }, */
];
// Configuración de la cantidad de productos por página.
const itemsPerPage = 10;

// Página actual que se mostrará inicialmente.
let currentPage = 1;

// Copia de todos los productos al principio para facilitar el filtrado.
let filteredProducts = products.slice();

// Función para renderizar las tarjetas de productos en la interfaz.
function renderProductCards() {
    // Obtener el contenedor donde se mostrarán los productos.
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    // Calcular los índices de inicio y fin de la lista de productos a mostrar en la página actual.
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Iterar sobre los productos a mostrar y generar las tarjetas correspondientes.
    for (let i = startIndex; i < endIndex && i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
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
                <button class="btn-2" onclick="editProduct(${product.id})">Editar</button>
            </div>
        `;
        container.appendChild(card);
    }

    // Renderizar la paginación después de mostrar los productos.
    renderPagination();
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

        if (newPrice !== null && newQuality !== null) {
            // Actualizar el precio y la calidad del producto.
            product.price = parseFloat(newPrice);
            product.quality = newQuality;
            renderProductCards();
        }
    }
}

// Renderización inicial al cargar la página.
renderProductCards();
