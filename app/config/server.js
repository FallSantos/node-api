const express = require('express')

const cors = require('cors')

const app = express()

// Cors
app.use(cors())// Aquí configura-se quem terá acesso a sua api

app.use(express.json())// Permitir receber dados no formato json.

// Conexão
require('./db')

// Rotas
app.get('/', (req, res) => {
    res.send('api')
})

require('../src/routes/product')(app)

module.exports = app

// OBS: CORS = Cross Access Origin Security.***