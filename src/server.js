const express = require('express')
const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev: dev,
  dir: './src'
})

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(handler)

  server.listen(3000, (err) => {
    if (err) {
      throw err
    }

    console.log('server ready on http://localhost:3000')
  })
}).catch((err) => {
  console.log(err)
  process.exit(1)
})