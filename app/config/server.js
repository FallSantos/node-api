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
    res.json({
        "name": "Atarter Rocketseat",
        "version": "0.1",
        "author": [
            {
                "name": "Fall Santos",
                "rule": "Fullstack developer",
                "email": "fallsantosdev@hotmail.com",
                "github": "https://github.com/fallsantos",
                "linkedin": "https://www.linkedin.com/in/fall-santos-23bb87103/"
            }
        ]
    })
})

require('../src/routes/product')(app)

module.exports = app

// OBS: CORS = Cross Access Origin Security.***