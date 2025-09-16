const express = require('express')
require('dotenv').config()
const userRouters = require('./routers/userRouters')
require('./models/InitialSchema')

const app  = express()

app.use(express.json())
app.use('/user',userRouters)

app.get('/',(req,res) => {
    res.send('Hell World')
})

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`server listen on http://localhost:${PORT}`);
    
})