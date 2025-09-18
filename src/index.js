const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send(`Twitter crushed on port ${port}!`)
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Youtube is running on port ${port}</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
