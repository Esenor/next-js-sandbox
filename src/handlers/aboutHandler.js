const originalPage = 'about'

const aboutHandler = (app) => {
  return (req, res) => {
    app.render(req, res, originalPage)
  }
}

module.exports = aboutHandler