const products = [
    { 
        id: '1', 
        name: 'Silla de madera', 
        price: 1000, 
        category: 'silla', 
        img:'https://pardohogar.vtexassets.com/arquivos/ids/192349/Silla-Naoto-Roble-tapizado-Gris-Genoud.jpg?v=638294519886630000', 
        stock: 25, 
        description:'Silla de roble'
    },
    { id: '2', name: 'Silla de oficina', price: 800, category: 'silla', img:'https://http2.mlstatic.com/D_NQ_NP_642286-MLA44761081710_012021-O.webp', stock: 16, description:'Silla con respaldo alto'},

    { id: '3', name: 'Sillon individual', price: 1200, category: 'sillon', img:'https://http2.mlstatic.com/D_NQ_NP_805503-MLA28794138829_112018-O.webp', stock: 912, description:'Sillon acolchonado individual'},
    { 
        id: '4', 
        name: 'Sillon en ele', 
        price: 1500, 
        category: 'sillon', 
        img:'https://dcdn.mitiendanube.com/stores/001/028/736/products/edit4-1-a454ebfdc846b2b0c617072544236347-640-0.jpg', 
        stock: 18, 
        description:'Sillon largo con forma de ele'
    },
    { 
        id: '5', 
        name: 'Puf silla', 
        price: 1250, 
        category: 'pufs', 
        img:'https://images.ecestaticos.com/322HzmdRZRWq0ryn7DL-wIWCnY8=/0x0:1799x1349/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa67%2F894%2F8ca%2Fa678948ca2321ae2c4b4d1739a7559ee.jpg', 
        stock: 24, 
        description:'Puf con respaldo'
    },
    { 
        id: '6', 
        name: 'Puf rojo', 
        price: 10, 
        category: 'pufs', 
        img:'https://www.debois.com.ar/images/stories/virtuemart/category/puff%20de%20colores.jpg', 
        stock: 10, 
        description:'Puf rojo'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}