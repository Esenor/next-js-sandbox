const express = require('express')
const next = require('next')
const apiMockServer = require('./mockServer/apiMockServer')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev: dev,
  dir: './src'
})

const run = async () => {
  await app.prepare()
  const apiMockApp = await apiMockServer.run(3042)
  const server = express()
  server.use(routes.getRequestHandler(app))
  server.listen(3000, (err) => {
    if (err) {
      throw err
    }
    console.log('server ready on http://localhost:3000')
  })
}

run()