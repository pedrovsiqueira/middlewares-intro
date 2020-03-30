const express = require('express')
const app = express()
const secretMd = require('./middlewares/secretMiddleware')

//middleware definition
// app.use((req, res, next) => {
//     // console.log('request was here')
//     req.secret = 'we rule the dev world'
//     next()
// })

app.use(secretMd.secretToReq())

app.get('/', (req, res) => res.send(req.secret))

app.listen(3000, () => console.log('app is running on por 3000'))