const express = require('express')
const cors = require('cors')
const menuTaxonomy = require('./handler/menuTaxonomy')
const manifest = require('./handler/manifest')
const post1 = require('./handler/post1')
const post2 = require('./handler/post2')
const post3 = require('./handler/post3')

module.exports = {
  run: async (port = 3042) => {
    return new Promise((resolve, reject) => {
      const app = express()
      // Enable cors
      app.use(cors())
      app.use(express.static(__dirname + '/public'))
      // Register API endpoint
      manifest.register(app)
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
