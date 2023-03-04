const express = require('express')
const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
    return res.send('learnoco')
})

app.listen(3000, () => {
    console.log('server start...')
})
