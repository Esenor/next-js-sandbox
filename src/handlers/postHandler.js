const originalPage = 'post'

const postHandler = (app) => {
  return (req, res) => {
    const queryParams = {
      slug: req.params.slug
    }
    app.render(req, res, originalPage, queryParams)
  }
}

module.exports = postHandler