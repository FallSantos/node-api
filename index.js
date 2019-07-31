require('dotenv').config()

const app = require('./app/config/server')

const port = process.env.PORT || 3005

app.listen(port, () => {
    console.log(`>>> Server running on port ${port}...`)
})