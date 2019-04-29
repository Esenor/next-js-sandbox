module.exports = {
  register: (app) => {
    app.get('/api/v1/manifest', function (req, res) {
      res.set('Content-Type', 'application/json')
      res.send({
        logo: 'http://localhost:3042/images/logo.png'
      })
    })
  }
}