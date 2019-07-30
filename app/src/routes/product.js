const productController = require('../controllers/product')

module.exports = (app) => {

    app.get('/product', productController.index)

    app.get('/product/:id', productController.show)

    app.post('/product', productController.store)

    app.put('/product/:id', productController.update)

    app.delete('/product/:id', productController.destroy)
}