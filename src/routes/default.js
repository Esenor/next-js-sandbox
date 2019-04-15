const postHandler = require('../handlers/postHandler')
const indexHandler = require('../handlers/indexHandler')
const aboutHandler = require('../handlers/aboutHandler')

module.exports = {
  register(server, app, prefix = '/') {
    server.get(`${prefix}`, indexHandler(app))
    server.get(`${prefix}a-propos`, aboutHandler(app))
    server.get(`${prefix}article/:slug`, postHandler(app))
  }
}