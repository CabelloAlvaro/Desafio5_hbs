const { Router } = require('express') 
const routerProducts = Router()
const apiContainer = require ('../containers/apiContainer') 

const products = []
let api = new apiContainer(products)

routerProducts.get('/', (req, res) => {
   
    res.render('products', { products })
})

routerProducts.post('/', (req, res) => {
    api.addProduct(req, res);
})

routerProducts.get('/:id', (req, res) => {
    api.getProduct(req, res);
})

routerProducts.put('/:id', (req, res) => {
    api.modifyProduct(req, res);
})

routerProducts.delete('/:id', (req, res) => {
    api.deleteProduct(req, res);
})



module.exports = routerProducts 