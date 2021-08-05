const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message:'hello docker world'})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`We are online on docker ${PORT}`)
})