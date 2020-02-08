const ProductModel = require('../models/Product')

product = {}

module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query// Para parâmetros get

        const products = await ProductModel.paginate({}, { page, limit: 3 })// await faz com que o resto do script só execute quando ele for executado, ou seja, quando buscar os registros do banco.

        return res.json(products)// Vai retornar todos os registros em formato json.
    },

    async show(req, res) {
        const product = await ProductModel.findById(req.params.id)

        return res.json(product)
    },

    async store(req, res) {
        const product = await ProductModel.create(req.body)

        return res.json(product)// É uma função, por isso tem que ter o 'return'.*
    },

    async update(req, res) {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product)// É uma função, por isso tem que ter o 'return'.*
    },

    async destroy(req, res) {
        await ProductModel.findByIdAndDelete(req.body)

        return res.json({ delete: true })// É uma função, por isso tem que ter o 'return'.*
    }
}