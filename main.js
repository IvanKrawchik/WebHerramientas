// Categorías
const btns1=[
    {
        id: 1,
        name: 'Enfriador abierto de múltiples pisos'
    },
    {
        id: 2,
        name: 'Enfriador vertical con puerta de vidrio'
    },
    {
        id: 3,
        name: 'Congelador vertical con puerta de vidrio'
    },
    {
        id: 4,
        name: 'Mostrador de exhibición de carne fresca'
    },
    {
        id: 5,
        name: 'Mostrador de escaparate de comida gourmet'
    },
    {
        id: 6,
        name: 'Congelador de isla'
    },
    {
        id: 7,
        name: 'Refrigerador de exhibición de promoción'
    },
    {
        id: 8,
        name: 'Pantalla Walk In Cooler'
    }]

const btns2=[
    {
        id: 9,
        name: 'Almacenamiento de frutas y verduras'
    }]

const btns3=[
    {
        id: 10,
        name: 'Unidad de condensación semihermetica'
    }]

    // Dropdown 1
    const filters = [...new Set(btns1.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns1').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            `<li><a class='dropdown-item' onclick='filterItems(${id}, "${name}")'>${name}</a></li>`
            )
    }).join('');

    // Dropdown 2
    const filters2 = [...new Set(btns2.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns2').innerHTML=filters2.map((btn)=>{
        var {name, id} = btn;
        return(
            `<li><a class='dropdown-item' onclick='filterItems(${id}, "${name}")'>${name}</a></li>`
            )
    }).join('');

    // Dropdown 3
    const filters3 = [...new Set(btns3.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns3').innerHTML=filters3.map((btn)=>{
        var {name, id} = btn;
        return(
            `<li><a class='dropdown-item' onclick='filterItems(${id}, "${name}")'>${name}</a></li>`
            )
    }).join('');
    
    // Productos
    const product = [
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/1.webp',
        title: ' Enfriador abierto de múltiples pisos',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/2.webp',
        title: 'Enfriador abierto vertical con pantalla múltiple de 4 capas',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/3.webp',
        title: 'Enchufe el enfriador de pantalla abierta semi-alta',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/4.webp',
        title: 'Enfriador de exhibición de piso múltiple vertical abierto de 5 capas de estantes de base baja',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/5.webp',
        title: 'Enfriador de pantalla abierta vertical combinado semi alto',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/6.webp',
        title: 'Enfriador abierto vertical multideck de 4 capas con caja de luz',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/7.webp',
        title: 'Enfriador de exhibición vertical de múltiples pisos con estantes de 4 capas',

    },
    {
        id: 1,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/8.webp',
        title: 'Enfriador de exhibición vertical de múltiples pisos con estantes de 4 capas',

    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/9.webp',
        title: 'Enfriador de pantalla de puerta de vidrio interior de compresor enchufable',
    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/10.webp',
        title: 'Refrigerador de refrigerador con pantalla de puerta de vidrio vertical',
    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/11.webp',
        title: 'Refrigerador vertical del refrigerador de la exhibición de la puerta de cristal',
    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/12.webp',
        title: 'Enfriador del refrigerador de la exhibición de la puerta de cristal superior de la caja de luz',
    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/13.webp',
        title: 'Escaparate estándar de enfriadores y congeladores de doble temperatura',
    },
    {
        id: 2,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/14.webp',
        title: 'Enfriador de refrigerador de pantalla vertical vertical con puerta de vidrio',
    },
    {
        id: 3,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/15.webp',
        title: 'Congelador de pantalla con puerta de vidrio',
    },
    {
        id: 3,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/16.webp',
        title: 'Congelador de exhibición de puerta de vidrio de 3 puertas',
    },
    {
        id: 3,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/17.webp',
        title: 'Congelador de pantalla con puerta de vidrio',
    },
    {
        id: 3,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/18.webp',
        title: 'Congelador del refrigerador de la exhibición de la puerta de cristal con la caja de luz',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/19.webp',
        title: 'Refrigerador de exhibición de carne colgante con puerta de vidrio',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/20.webp',
        title: 'Servicio de ensalada de sushi de carne fresca en mostrador',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/21.webp',
        title: 'Mostrador de servicio de carne fresca vertical de acero inoxidable de alta gama',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/22.webp',
        title: 'Servicio de puerta de vidrio sobre mostrador para refrigerador y congelador',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/23.webp',
        title: 'Congelador de acero inoxidable para mariscos',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/24.webp',
        title: 'Servicio de doble capa de sushi en mostrador',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/25.webp',
        title: 'Servicio de carne fresca de lujo sobre vitrina con estantes de acero inoxidable',
    },
    {
        id: 4,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/26.webp',
        title: 'Servicio de ensalada de sushi de carne fresca en mostrador con vidrio recto',
    },
    {
        id: 5,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/27.webp',
        title: 'Mostrador de escaparate de delicatessen con puerta de vidrio corrediza izquierda y derecha',
    },
    {
        id: 5,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/28.webp',
        title: 'Mostrador de vitrina de servicio de delicatessen con puerta de vidrio',
    },
    {
        id: 5,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/29.webp',
        title: 'Mostrador de vitrina de servicio de vidrio recto para delicatessen y carne fresca',
    },
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/30.webp',
        title: 'Congelador de isla combinado de dos lados tipo plug-in',
    },
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/31.webp',
        title: 'Congelador de isla de pared con salida de aire única',
    },
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/32.webp',
        title: 'Congelador de isla con salida de aire lateral Doule para alimentos congelados',
    },
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/33.webp',
        title: 'Congelador de isla combinado con puerta corredera izquierda y derecha tipo plug-in',
    },
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/34.webp',
        title: 'Congelador de isla combinado con puerta corrediza de vidrio de tipo enchufable',
    },   
    {
        id: 6,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/35.webp',
        title: 'Tipo enchufable Puerta corrediza de vidrio de arriba hacia abajo Ventanas altas Congelador de isla combinado',
    }, 
    {
        id: 7,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/36.webp',
        title: 'Enfriador Abierto Mini Island',
    },
    {
        id: 7,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/37.webp',
        title: 'Enfriador Abierto Mini Island',
    },
    {
        id: 7,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/38.webp',
        title: 'Refrigerador de exhibición de promoción horizontal tipo plug-in',
    },
    {
        id: 7,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/39.webp',
        title: 'Mini enfriador de bebidas tipo plug-in',
    },
    {
        id: 8,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/40.webp',
        title: 'Caminar en la cámara frigorífica del congelador',
    },
    {
        id: 9,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/41.webp',
        title: 'almacenamiento en cámara frigorífica para huevos de frutas y verduras',
    },
    {
        id: 9,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/42.webp',
        title: 'pescado fresco y carne congelador rápido cámara frigorífica',
    },
    {
        id: 9,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/43.webp',
        title: 'carne mariscos almacenamiento en cámara frigorífica',
    },
    {
        id: 9,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/44.webp',
        title: 'Almacenamiento en cámara frigorífica de frutas y verduras',
    },
    {
        id: 10,
        image: 'https://ivankrawchik.github.io/WebHerramientas/img/runtecool/45.webp',
        title: 'Unidad de condensación de pistón semicerrada Bitzer',
    }
    ];
    
    // Filtra los productos por categorías
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    // Muestra de arranque solo los productos de la primera categoría
    const initialCategory = 1;
    const initialProducts = product.filter((item) => item.id === initialCategory);
    let currentCategoryId = initialCategory

    // Recorrer los productos y los muestra
    const displayItem = (categoryTitle, items) => {
        document.getElementById('root').innerHTML = `
        <h2>${categoryTitle}</h2>
        ${items.map((item)=> {
            var {image, title} = item;
            return(
                `<a class="card" href="https://ivankrawchik.github.io/WebHerramientas/templates/catalogo.html#contacto">
                <img src="${image}" class="card-img-top" alt="producto ${title}">
                <div class="card-body">
                <h6 class="card-title">${title}</h6>
                </div>
                </a>`)
        }).join('')}`;
    }
    
    // Cambiar el título y mostrar productos según la categoría seleccionada
    const filterItems = (a, categoryName) => {
        currentCategoryId = a;
        const filteredCategories = categories.filter((item) => item.id == a);
        displayItem(categoryName,filteredCategories);
    }

    // Mostrar solo los productos de la primera categoría al arranque
    filterItems(initialCategory, "ENFRIADOR ABIERTO DE MULTIPLES PISOS");


