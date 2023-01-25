import express from 'express'

const host = 'localhost'
const port = 3010

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/app', (req, res) => {
  res.send(`Current host: ${host}, port: ${port}`)
})

app.get('/hello-world', (req, res) => {
  res.send('Hello world!')
})

app.get('/ru/hello-world', (req, res) => {
  res.send('Привет мир!')
})

app.get('/cn/hello-world', (req, res) => {
  res.send('你好世界!')
})

app.get('/node', (req, res) => {
  res.send(`Running node js!`)
})

app.get('/node-version', (req, res) => {
  res.send(`Running on v16.15.1 [1]`)
})

app.get('/auto', (req, res) => {
  res.send(`Oh yeeeas`)
})

app.listen(port, host, () => {
  console.log(`Application run on ${host}:${port}`)
})
