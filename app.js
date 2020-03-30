const express = require('express')

const app = express()

//middleware definition
app.use((req, res, next) => {
    console.log('request was here')
    next()
})


app.get('/', (req, res) => res.send('Yo!'))

app.listen(3000, () => console.log('app is running on por 3000'))