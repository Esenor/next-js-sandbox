const express = require('express')
const cors = require('cors')
const menuTaxonomy = require('./mockServer/menuTaxonomy')
const post1 = require('./mockServer/post1')
const post2 = require('./mockServer/post2')
const post3 = require('./mockServer/post3')

module.exports = {
  run: async (port = 3042) => {
    return new Promise((resolve, reject) => {
      const app = express()
      // Enable cors
      app.use(cors())
      // Register API endpoint
      menuTaxonomy.register(app)
      post1.register(app)
      post2.register(app)
      post3.register(app)
      // Run server
      app.listen(port, (err) => {
        if (err) {
          reject(err)
        }
        console.log(`api mock server ready on http://localhost:${port}`)
        resolve(app)
      })
    })
  }
}
