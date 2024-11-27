let productos = JSON.parse(localStorage.getItem("productos")) || [
    { 
        id: 1, 
        nombre: "Samsung Galaxy A25", 
        descripcion: "El Samsung A25 es un smartphone que combina un diseño elegante con un rendimiento sólido. Equipado con una pantalla AMOLED de alta resolución, ofrece colores vibrantes y un gran contraste para una experiencia visual envolvente. Su potente procesador y amplia memoria RAM aseguran un rendimiento fluido, ya sea para navegar por aplicaciones, jugar o realizar multitareas. Además, cuenta con una cámara versátil que captura fotos nítidas y detalladas, incluso en condiciones de poca luz. Con conectividad 5G y una batería de larga duración, el A25 es ideal para quienes buscan un dispositivo confiable y moderno.", 
        precio: 500000, 
        imagen: "/assets/samsung a25.png", 
        disponible: true,
        categoria: "tecnologia"
    },
    { 
        id: 2, 
        nombre: "Mouse Logitech G305", 
        descripcion: "El Logitech G305 es un mouse inalámbrico diseñado para gamers, con el sensor óptico HERO de alta precisión que ofrece hasta 12,000 DPI, brindando un seguimiento preciso y rápido. Su conectividad inalámbrica LIGHTSPEED garantiza una latencia ultrabaja y un rendimiento comparable al de un mouse con cable. Compacto y ligero, el G305 es ideal para largas sesiones de juego sin causar fatiga. Funciona con una sola pila AA que puede durar hasta 250 horas, y su diseño ambidiestro lo hace cómodo para usuarios tanto diestros como zurdos. Es una excelente opción para jugadores que buscan rendimiento y movilidad sin cables.", 
        precio: 65000, 
        imagen: "/assets/mouse logitech.png", 
        disponible: false,
        categoria: "tecnologia"
    },
    { 
        id: 3, 
        nombre: "Iphone 15 Pro Max", 
        descripcion: "El iPhone 15 Pro Max es el buque insignia de Apple, que combina un diseño sofisticado con tecnología de vanguardia. Con su pantalla Super Retina XDR de 6.7 pulgadas, ofrece colores vibrantes y un brillo excepcional para una experiencia visual inigualable. Equipado con el potente chip A17 Pro, garantiza un rendimiento rápido y eficiente, ideal para juegos y tareas intensivas. Su sistema de cámaras avanzado incluye un teleobjetivo de 5x, permitiendo capturar fotos y videos de calidad profesional. Además, la conectividad USB-C y la duración mejorada de la batería hacen del iPhone 15 Pro Max una opción destacada para los amantes de la tecnología que buscan lo último en innovación.", 
        precio: 1800000, 
        imagen: "/assets/Iphone 15 pro max.png", 
        disponible: true,
        categoria: "tecnologia"
    },
    { 
        id: 4, 
        nombre: "Auriculares Bluetooth JBL", 
        descripcion: "Los auriculares Bluetooth JBL ofrecen un sonido de alta calidad con graves profundos y claros, característico de la marca. Diseñados para la comodidad y la portabilidad, son ligeros y cuentan con una excelente duración de batería, lo que los hace ideales para escuchar música durante todo el día. Con conectividad inalámbrica estable, permiten emparejarse fácilmente con dispositivos móviles, brindando libertad de movimiento. Además, algunos modelos cuentan con cancelación de ruido activa, micrófono integrado para llamadas, y controles táctiles, ofreciendo una experiencia de audio inmersiva y conveniente en cualquier lugar.", 
        precio: 100000, 
        imagen: "/assets/Auriculares JBL.png", 
        disponible: true,
        categoria: "tecnologia"
    },
    { 
        id: 5, 
        nombre: "Placa de video Gigabyte Geforce RTX4060 8GB", 
        descripcion: "La Gigabyte GeForce RTX 4060 de 8GB es una tarjeta gráfica de última generación basada en la arquitectura NVIDIA Ada Lovelace. Con 8 GB de memoria GDDR6, ofrece un rendimiento excepcional en juegos y aplicaciones gráficas, permitiendo jugar en resoluciones altas con fluidez y soporte para ray tracing en tiempo real, que mejora los gráficos con iluminación y reflejos más realistas. Además, cuenta con tecnología DLSS 3, que optimiza el rendimiento utilizando inteligencia artificial. Su sistema de refrigeración avanzado mantiene las temperaturas bajo control, incluso en las sesiones más intensas. Es una excelente opción para gamers y creadores de contenido que buscan alto rendimiento y eficiencia.", 
        precio: 1500000, 
        imagen: "/assets/rtx 4060.png", 
        disponible: false,
        categoria: "tecnologia"
    },
    { 
        id: 6, 
        nombre: "Teclado Mecánico Red Dragon", 
        descripcion: "El teclado mecánico Dragonborn Black con switches marrones es ideal para jugadores y profesionales que buscan un equilibrio entre la precisión y la comodidad. Los switches marrones ofrecen una sensación táctil suave, con una respuesta rápida y sin el clic ruidoso de otros switches, lo que lo hace perfecto tanto para juegos como para escribir. Su construcción robusta y diseño compacto garantizan durabilidad y portabilidad. Además, cuenta con retroiluminación personalizable, lo que añade un toque de estilo y mejora la visibilidad en condiciones de poca luz. Es una excelente opción para quienes buscan rendimiento y funcionalidad en un teclado mecánico.", 
        precio: 60000, 
        imagen: "/assets/Teclado RedDragon.png", 
        disponible: true,
        categoria: "tecnologia"
    },
    { 
        id: 7, 
        nombre: "PlayStation 5", 
        descripcion: "Este modelo ofrece una experiencia de juego inigualable gracias a su potente hardware. Cuenta con un procesador de alta velocidad y una unidad de estado sólido personalizada integrada, que te permiten disfrutar de juegos con gráficos increíblemente detallados y tiempos de carga casi instantáneos. Además, la Playstation 5 Standar Edition tiene retrocompatibilidad con la mayoría de los juegos de Playstation 4, lo que significa que puedes seguir jugando tus títulos favoritos en la nueva consola.", 
        precio: 1300000, 
        imagen: "/assets/ps5.png", 
        disponible: false,
        categoria: "tecnologia"
    },
    { 
        id: 8, 
        nombre: "Monitor Samsung LED 27\" IPS 75Hz T35F", 
        descripcion: "El monitor Samsung T35F de 27 pulgadas ofrece una experiencia visual inmersiva con su pantalla IPS, que garantiza colores vibrantes y ángulos de visión amplios. Con una tasa de refresco de 75Hz, proporciona imágenes suaves y fluidas, ideales para el entretenimiento, la edición y el trabajo diario. Su diseño sin bordes en tres lados maximiza el área de visualización, aportando un aspecto moderno y elegante. Además, cuenta con tecnología de protección ocular, que reduce la fatiga visual durante largas jornadas frente a la pantalla. Es una opción versátil y de calidad para usuarios que buscan un monitor confiable y con buen rendimiento.", 
        precio: 400000, 
        imagen: "/assets/Monitor Led Samsung.png", 
        disponible: true ,
        categoria: "tecnologia"
    },
    {
        id: 9,
        nombre: "Pava Eléctrica 2200w 1.8 Lts PE-4906",
        descripcion: "La pava eléctrica PE-4906 ofrece una forma rápida y eficiente de hervir agua gracias a su potencia de 2200W. Con una capacidad de 1.8 litros, es ideal para preparar grandes cantidades de agua para té, café o infusiones en pocos minutos. Su diseño compacto y ergonómico facilita su uso, mientras que el sistema de apagado automático garantiza seguridad al evitar el sobrecalentamiento. Además, cuenta con una base giratoria de 360 grados, lo que la hace cómoda para diestros y zurdos. Es una opción práctica para el hogar o la oficina, combinando funcionalidad y rapidez.",
        precio: 500000,
        imagen: "/assets/Pava electrica.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 10,
        nombre: "Licuadora steel series ML7050",
        descripcion: "La licuadora Steel Series ML7050 es una potente herramienta de cocina diseñada para ofrecer un rendimiento superior. Con un motor de alta potencia y cuchillas de acero inoxidable, es capaz de triturar, mezclar y licuar una amplia variedad de ingredientes con facilidad, desde frutas y verduras hasta hielo. Su jarra de gran capacidad está hecha de materiales resistentes y seguros para alimentos, ideal para preparar grandes cantidades de batidos, salsas o sopas. Además, cuenta con múltiples velocidades y funciones, permitiendo un control preciso sobre la textura deseada. Su diseño moderno en acero inoxidable agrega un toque elegante a cualquier cocina.",
        precio: 65000,
        imagen: "/assets/licuadora.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 11,
        nombre: "Aspiradora Smart Duo Xiaomi Mi Robot Vacuum-Mop 2 Lite",
        descripcion: "La Xiaomi Mi Robot Vacuum-Mop 2 Lite es una aspiradora inteligente que combina aspirado y fregado en un solo dispositivo, ofreciendo una limpieza completa y eficiente. Equipado con un sistema de navegación inteligente, mapea y planifica rutas óptimas para cubrir cada rincón del hogar. Su potente motor proporciona una gran capacidad de succión para eliminar polvo, suciedad y pelos de mascotas, mientras que su función de fregado agrega un nivel extra de limpieza. Además, se puede controlar fácilmente a través de la app Mi Home, permitiendo programar limpiezas y ajustar configuraciones de manera remota. Ideal para mantener el hogar limpio sin esfuerzo.",
        precio: 520000,
        imagen: "/assets/robot aspiradora.jpg",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 12,
        nombre: "Heladera Samsung 457 L con dispenser",
        descripcion: "La heladera Samsung de 457 litros con dispenser ofrece un amplio espacio de almacenamiento y un diseño moderno. Su dispensador de agua integrado proporciona comodidad al ofrecer agua fresca sin abrir la puerta. Con tecnología de enfriamiento avanzado, mantiene los alimentos frescos por más tiempo, distribuyendo el aire frío de manera uniforme en todo el refrigerador. Además, su sistema No Frost evita la acumulación de hielo, eliminando la necesidad de descongelar. El diseño elegante y eficiente en consumo de energía la convierte en una excelente opción para hogares que buscan funcionalidad y estilo en un solo electrodoméstico.",
        precio: 2204000,
        imagen: "/assets/Heladera.png",
        disponible: false,
        categoria: "electrodomesticos"
    },
    {
        id: 13,
        nombre: "Lavarropas Automático Candy GVS149TWHC3RPLA 9Kg 1400rpm",
        descripcion: "El Candy GVS149TWHC3RPLA es un lavarropas automático con una capacidad de 9 kg, ideal para familias numerosas. Su velocidad de centrifugado de 1400 rpm asegura una mayor extracción de agua, lo que reduce el tiempo de secado. Equipado con una amplia variedad de programas de lavado, permite adaptar el ciclo según el tipo de tejido y nivel de suciedad, garantizando un cuidado óptimo de las prendas. Además, cuenta con conectividad Wi-Fi, permitiendo controlar y monitorear el lavado desde una aplicación móvil. Su eficiencia energética y tecnología avanzada lo hacen una excelente opción para quienes buscan comodidad y rendimiento en el lavado.",
        precio: 200000,
        imagen: "/assets/lavarropas.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 14,
        nombre: "Horno Microondas Warpetch WT-M720LDS",
        descripcion: "El microondas Warptech WT-M720LDS combina diseño moderno y funcionalidad en un solo aparato. Con una capacidad de 20 litros, es ideal para calentar, cocinar y descongelar alimentos de manera rápida y eficiente. Su potencia de 700W asegura un calentamiento uniforme y efectivo. Cuenta con múltiples funciones preestablecidas que facilitan la cocción de diferentes tipos de platos, así como un temporizador y un panel de control intuitivo. Su diseño elegante en acero inoxidable se adapta a cualquier cocina, mientras que su tamaño compacto lo hace perfecto para espacios reducidos. Es una opción práctica para quienes buscan comodidad y rapidez en la cocina.",
        precio: 90000,
        imagen: "/assets/microondas.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 15,
        nombre: "Tostadora Eléctrica Electrolux Inox ETS11",
        descripcion: "La tostadora eléctrica Electrolux Inox ETS11 es un electrodoméstico elegante y funcional que ofrece 8 niveles de tostado para personalizar el dorado del pan según tus preferencias. Su diseño de acero inoxidable no solo le da un toque moderno, sino que también asegura durabilidad. Con capacidad para dos rebanadas, es ideal para preparar desayunos rápidos y deliciosos. Incluye una bandeja recogemigas extraíble que facilita la limpieza y un sistema de apagado automático para mayor seguridad. Perfecta para quienes buscan una tostadora eficiente y de calidad en su cocina.",
        precio: 300000,
        imagen: "/assets/tostadora.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 16,
        nombre: "Secarropas Kohinoor B665 6.5Kg",
        descripcion: "El secarropas Kohinoor B665 es una solución eficiente para el secado de la ropa, con una capacidad de 6.5 kg que lo hace ideal para hogares de tamaño mediano. Diseñado para ofrecer un rendimiento óptimo, cuenta con múltiples programas de secado que se adaptan a diferentes tipos de tejidos, asegurando un cuidado adecuado de tus prendas. Su tecnología de secado a aire caliente garantiza un secado rápido y efectivo, minimizando la humedad. Además, su diseño compacto permite una fácil instalación en espacios reducidos, mientras que su panel de control intuitivo facilita la selección de las funciones deseadas. Es una opción práctica y confiable para quienes buscan comodidad en el cuidado de la ropa.",
        precio: 260000,
        imagen: "/assets/secarropa.png",
        disponible: true,
        categoria: "electrodomesticos"
    },
    {
        id: 17,
        nombre: "Playstation 5 Marvel's Spider-Man 2 Edicion Limitada",
        descripcion: "La PlayStation 5 Marvel's Spider-Man 2 Edición Limitada es una versión exclusiva de la consola, diseñada especialmente para los fanáticos del icónico superhéroe. Presenta un diseño único inspirado en el juego, con gráficos detallados de Spider-Man en la consola y el control DualSense. Además de su aspecto distintivo, incluye el aclamado juego Marvel's Spider-Man 2, que ofrece una experiencia de acción envolvente y gráficos de última generación, gracias a la potencia de la PS5. Esta edición limitada es ideal tanto para coleccionistas como para jugadores que buscan sumergirse en el universo de Spider-Man con estilo.",
        precio: 1300000,
        precioOriginal: 1800000,
        imagen: "/assets/ps5spiderman.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 18,
        nombre: "Impresora Epson EcoTank L4260",
        descripcion: "La Epson EcoTank L4260 es una impresora multifuncional que ofrece una solución económica y sostenible para el hogar y la oficina. Con su sistema de tanque de tinta recargable, elimina la necesidad de cartuchos tradicionales, permitiendo un ahorro significativo en costos de impresión. Esta impresora permite imprimir, escanear, copiar y enviar faxes, todo con una calidad excepcional. Su conectividad Wi-Fi y capacidad para imprimir desde dispositivos móviles facilitan la impresión desde cualquier lugar. Además, su diseño compacto y moderno se adapta perfectamente a cualquier espacio de trabajo. Ideal para quienes buscan eficiencia y conveniencia en la impresión.",
        precio: 100000,
        precioOriginal: 200000,
        imagen: "/assets/impresora epson.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 19,
        nombre: "Aire Acondicionado Split Black Design",
        descripcion: "El aire acondicionado Split Black Design combina un rendimiento eficiente con un diseño elegante y moderno en color negro, que se adapta perfectamente a cualquier ambiente contemporáneo. Con su tecnología avanzada de enfriamiento y calefacción, ofrece una temperatura ideal durante todo el año, asegurando un bajo consumo energético. Además, cuenta con funciones como el control remoto, temporizador programable y modos de funcionamiento ajustables para mayor comodidad. Su operación silenciosa y filtro purificador de aire lo convierten en una excelente opción para quienes buscan confort, estilo y eficiencia en climatización.",
        precio: 2300000,
        precioOriginal: 3000000,
        imagen: "/assets/aire-acondicionado.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 20,
        nombre: "Laptop HP 15-fc0004la: AMD Ryzen 3, 8GB RAM",
        descripcion: "La HP 15-fc0004la es una laptop versátil y eficiente, equipada con un procesador AMD Ryzen 3 que proporciona un rendimiento fluido para tareas cotidianas, como navegación web, trabajos de oficina y streaming. Sus 8GB de RAM permiten realizar múltiples tareas sin interrupciones, asegurando una experiencia sin retrasos. Con una pantalla de 15.6 pulgadas, ofrece una visualización clara y cómoda, ideal para el trabajo o el entretenimiento. Su diseño delgado y ligero la hace fácilmente portátil, y su batería de larga duración asegura productividad durante todo el día. Es una excelente opción para estudiantes o profesionales que buscan una laptop confiable y económica.",
        precio: 350000,
        precioOriginal: 430000,
        imagen: "/assets/laptop.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 21,
        nombre: "Laptop Gamer ROG Strix G16 Intel® Core™ i9",
        descripcion: "La ROG Strix G16 es una laptop diseñada para ofrecer un rendimiento de élite en gaming y tareas intensivas. Equipada con un procesador Intel® Core™ i9 de última generación y una tarjeta gráfica NVIDIA GeForce RTX 4060, proporciona gráficos impresionantes y una experiencia de juego fluida con soporte para ray tracing y DLSS. Sus 16 GB de RAM garantizan una multitarea eficiente y su almacenamiento SSD de 1TB ofrece velocidad y espacio amplio para juegos y archivos. Con su pantalla de 16 pulgadas, tasa de refresco alta, y diseño agresivo con iluminación RGB, esta laptop es ideal para jugadores exigentes y creadores de contenido que buscan potencia y estilo en un solo equipo.",
        precio: 3500000,
        precioOriginal: 4770000,
        imagen: "/assets/Laptop-gamer.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 22,
        nombre: "Televisor Samsung 55\" OLED 4K S90C",
        descripcion: "El televisor Samsung S90C de 55 pulgadas con tecnología OLED 4K ofrece una calidad de imagen impresionante, con negros profundos y colores vibrantes gracias a la tecnología de píxeles autoiluminados. Su resolución 4K UHD garantiza detalles nítidos y claros, ideal para disfrutar de contenido en alta definición. Además, cuenta con un procesador Neural Quantum 4K que optimiza el rendimiento visual y mejora la experiencia de visualización con inteligencia artificial. Equipado con soporte HDR10+ y una tasa de refresco rápida, es perfecto para películas, series y videojuegos. Su diseño delgado y minimalista se adapta a cualquier espacio, aportando elegancia y modernidad.",
        precio: 2600000,
        precioOriginal: 3300000,
        imagen: "/assets/TV.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 23,
        nombre: "XBOX SERIES X",
        descripcion: "La Xbox Series X es la consola más potente de Microsoft, diseñada para ofrecer un rendimiento de vanguardia en gaming. Equipada con un procesador de 8 núcleos y gráficos de la arquitectura RDNA 2 de AMD, permite jugar en resolución 4K a hasta 120 fps, brindando gráficos ultra detallados y una experiencia de juego fluida. Con 1 TB de almacenamiento SSD, asegura tiempos de carga rápidos y acceso instantáneo a juegos, mientras que su retrocompatibilidad permite disfrutar de títulos de generaciones anteriores. Además, su soporte para ray tracing realza los efectos de luz y sombras, y su diseño minimalista pero robusto garantiza una integración perfecta en cualquier setup de entretenimiento.",
        precio: 400000,
        precioOriginal: 600000,
        imagen: "/assets/xbox.png",
        disponible: true,
        categoria: "ofertas",
    },
    {
        id: 24,
        nombre: "Nintendo Switch OLED 64 GB",
        descripcion: "La Nintendo Switch OLED es una versión mejorada de la consola híbrida de Nintendo, con una pantalla OLED de 7 pulgadas que ofrece colores más vivos y un mejor contraste para una experiencia de juego inmersiva. Con 64 GB de almacenamiento interno, permite guardar una mayor cantidad de juegos y contenido digital. Esta consola es ideal tanto para jugar en casa, conectada a la TV, como en modo portátil. Además, cuenta con un soporte trasero ajustable, mejorando la estabilidad en el modo sobremesa. Es perfecta para quienes buscan la versatilidad de jugar en cualquier lugar, disfrutando de gráficos optimizados y un diseño ergonómico mejorado.",
        precio: 440000,
        precioOriginal: 525000,
        imagen: "/assets/switch.png",
        disponible: true,
        categoria: "ofertas",
    }
];

// Contenedor de productos en el HTML
const contenedorProductos = document.getElementById('products-container');

// Función para renderizar los productos en la página de listado de productos
function renderizarProductos() {
    productos.forEach((producto) => {
        // Crear elemento "a" contenedor del producto
        const link = document.createElement('a');
        link.href = `pagProductosSubidos.html?id=${producto.id}`;  // Enlace con el ID del producto
        
        // Crear la tarjeta del producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');

        // Crear y agregar la imagen
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        productoDiv.appendChild(imagen);

        const categoria = document.createElement('span');
        categoria.textContent = producto.categoria;
        productoDiv.appendChild(categoria);

        // Crear y agregar el nombre
        const nombre = document.createElement('h5');
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);
        productoDiv.classList.add('des');

        // Crear y agregar el precio
        const precio = document.createElement('h4');
        precio.textContent = `$${producto.precio.toLocaleString()}`;
        productoDiv.appendChild(precio);

        const estrellas = document.createElement('div');
        //darle la clase star a solo este elemento
        estrellas.classList.add('star');
        for (let i = 0; i < 5; i++) {
            const estrella = document.createElement('i');
            estrella.classList.add('fas');
            estrella.classList.add('fa-star');
            estrellas.appendChild(estrella);
        }

        productoDiv.appendChild(estrellas);


        // Agregar la tarjeta de producto al enlace
        link.appendChild(productoDiv);

        // Agregar el enlace con la tarjeta al contenedor de productos
        contenedorProductos.appendChild(link);
    });
}


renderizarProductos();