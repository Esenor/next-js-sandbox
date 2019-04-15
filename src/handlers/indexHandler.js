const originalPage = 'index'

const indexHandler = (app) => {
  return (req, res) => {
    app.render(req, res, originalPage)
  }
}

module.exports = indexHandler