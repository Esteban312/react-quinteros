const productList = [
    {
        id: 1,
        imgProducto: '/product-piano.jpg',
        productTitle: 'Piano Vertical Marrón',
        precio: 850000,
        stock: 7,
        categoria: 'teclados',
        descripcion: 'Este piano vertical de madera marrón combina un diseño clásico con una calidad de sonido excepcional. Ideal tanto para principiantes como para pianistas experimentados, ofrece teclas sensibles al tacto, un mecanismo de martillos preciso y una acústica envolvente que se adapta a cualquier espacio musical.'
    },
    {
        id: 2,
        imgProducto: '/product-drum.jpg',
        productTitle: 'Batería Completa',
        precio: 420000,
        stock: 5,
        categoria: 'percusion',
        descripcion: 'Set de batería acústica completo, incluye bombo, redoblante, toms, platillos de alta calidad y hardware resistente. Diseñada para brindar un sonido potente y equilibrado, es ideal para músicos de todos los niveles, desde principiantes hasta profesionales que buscan un equipo confiable para estudio y presentaciones en vivo.'
    },
    {
        id: 3,
        imgProducto: '/producto-guitar.jpg',
        productTitle: 'Guitarra Eléctrica',
        precio: 220000,
        stock: 10,
        categoria: 'cuerdas',
        descripcion: 'Guitarra eléctrica con cuerpo de madera maciza, pastillas de alta ganancia y un diseño ergonómico que garantiza comodidad al tocar. Perfecta para cualquier género musical, desde rock y blues hasta metal y jazz, ofreciendo una excelente respuesta sonora y sustain prolongado.'
    },
    {
        id: 4,
        imgProducto: '/product-microphone.jpg',
        productTitle: 'Micrófono Profesional',
        precio: 95000,
        stock: 25,
        categoria: 'audio',
        descripcion: 'Micrófono condensador de alta fidelidad con patrón polar cardioide, ideal para grabaciones en estudio, transmisiones en vivo y presentaciones profesionales. Captura la voz con gran claridad y reducción de ruido ambiental, garantizando una calidad de audio nítida y profesional.'
    },
    {
        id: 5,
        imgProducto: '/product-violin.jpg',
        productTitle: 'Violín Clásico',
        precio: 185000,
        stock: 6,
        categoria: 'cuerdas',
        descripcion: 'Violín clásico fabricado con madera de abeto y ébano, diseñado para ofrecer una resonancia cálida y equilibrada. Incluye un arco de crin de caballo y una funda acolchada para su protección. Ideal tanto para estudiantes de nivel intermedio como para violinistas avanzados que buscan un sonido rico y expresivo.'
    },
    {
        id: 6,
        imgProducto: '/product-guitarra-criolla.jpg',
        productTitle: 'Guitarra Criolla',
        precio: 97000,
        stock: 14,
        categoria: 'cuerdas',
        descripcion: 'Guitarra criolla construida con maderas seleccionadas, cuerdas de nylon suaves y un diseño tradicional que facilita la ejecución. Perfecta para interpretar música clásica, folclórica y flamenco. Su sonido cálido y equilibrado la hace una excelente elección para músicos de cualquier nivel.'
    },
    {
        id: 7,
        imgProducto: '/product-piano-cola.webp',
        productTitle: 'Piano de Cola',
        precio: 1500000,
        stock: 3,
        categoria: 'teclados',
        descripcion: 'Piano de cola con acabado en negro brillante, ideal para conciertos y estudios de grabación. Su mecánica precisa, teclas de marfil sintético y una acústica profunda permiten una interpretación excepcional en cualquier entorno musical.'
    },
    {
        id: 8,
        imgProducto: '/product-sintetizador.jpg',
        productTitle: 'Sintetizador Digital',
        precio: 380000,
        stock: 8,
        categoria: 'teclados',
        descripcion: 'Sintetizador digital con más de 500 sonidos predefinidos, efectos incorporados y un secuenciador versátil. Ideal para producción musical y presentaciones en vivo, ofrece una interfaz intuitiva y conectividad MIDI avanzada.'
    },
    {
        id: 9,
        imgProducto: '/product-bongo.jpg',
        productTitle: 'Bongó de Madera',
        precio: 75000,
        stock: 10,
        categoria: 'percusion',
        descripcion: 'Bongó artesanal hecho de madera de roble con parches de cuero natural. Perfecto para ritmos latinos y afrocaribeños, brinda una sonoridad cálida y resonante para cualquier percusionista.'
    },
    {
        id: 10,
        imgProducto: '/product-bajo.jpg',
        productTitle: 'Bajo Eléctrico',
        precio: 280000,
        stock: 7,
        categoria: 'cuerdas',
        descripcion: 'Bajo eléctrico de cuatro cuerdas con cuerpo ergonómico y ecualización activa. Diseñado para ofrecer un sonido profundo y definido, ideal para músicos de cualquier género musical.'
    },
    {
        id: 11,
        imgProducto: '/product-consola.jpg',
        productTitle: 'Consola de Audio',
        precio: 420000,
        stock: 5,
        categoria: 'audio',
        descripcion: 'Consola de audio profesional con múltiples entradas y efectos integrados. Perfecta para estudios de grabación y eventos en vivo, ofreciendo una mezcla precisa y un sonido cristalino.'
    },
    {
        id: 12,
        imgProducto: '/product-cable-microfono.jpg',
        productTitle: 'Cable para Micrófono',
        precio: 15000,
        stock: 50,
        categoria: 'audio',
        descripcion: 'Cable balanceado de alta calidad para micrófonos, con conectores XLR chapados en oro y aislamiento reforzado. Garantiza una transmisión de señal limpia y sin interferencias.'
    },
    {
        id: 13,
        imgProducto: '/product-cable-instrumento.jpg',
        productTitle: 'Cable para Instrumento',
        precio: 18000,
        stock: 45,
        categoria: 'audio',
        descripcion: 'Cable de instrumento blindado con conectores de alta calidad, diseñado para ofrecer un sonido puro y sin ruidos. Ideal para guitarras, bajos y teclados en estudio o presentaciones en vivo.'
    },
    {
        id: 14,
        imgProducto: '/product-baquetas.jpg',
        productTitle: 'Baquetas de Batería',
        precio: 12000,
        stock: 30,
        categoria: 'percusion',
        descripcion: 'Baquetas de madera de arce de alta resistencia con punta de nylon para un sonido definido en los platillos. Ideales para bateristas de cualquier nivel y estilo musical.'
    },
    {
        id: 15,
        imgProducto: '/product-redoblante.jpg',
        productTitle: 'Redoblante de Batería',
        precio: 95000,
        stock: 6,
        categoria: 'percusion',
        descripcion: 'Redoblante profesional de acero inoxidable con bordes reforzados para un sonido nítido y potente. Perfecto para presentaciones en vivo y grabaciones de estudio.'
    },
    {
        id: 16,
        imgProducto: '/product-plato.webp',
        productTitle: 'Hi hat para bateria de bronce',
        precio: 68000,
        stock: 9,
        categoria: 'percusion',
        descripcion: 'Plato de batería de aleación de bronce con respuesta dinámica y gran proyección. Ideal para estilos de música como rock, jazz y funk.'
    },
    {
        id: 17,
        imgProducto: '/product-cuerdas-electric.png',
        productTitle: 'Cuerdas de Guitarra Eléctrica',
        precio: 25000,
        stock: 20,
        categoria: 'cuerdas',
        descripcion: 'Juego de cuerdas para guitarra eléctrica de acero niquelado, diseñadas para ofrecer un tono brillante y una gran durabilidad.'
    },
    {
        id: 18,
        imgProducto: '/product-cuerdas-criolla.png',
        productTitle: 'Cuerdas de Guitarra Criolla',
        precio: 18000,
        stock: 25,
        categoria: 'cuerdas',
        descripcion: 'Set de cuerdas de nylon para guitarra criolla, ofreciendo un sonido cálido y gran comodidad al tocar.'
    }
];

export default productList;
