const routes = require('next-routes')

module.exports = routes()
  .add({
    name: 'home_page',
    pattern: '/',
    page: 'index'
  })
  .add({
    name: 'about_page',
    pattern: '/a-propos',
    page: 'about'
  })
  .add({
    name: 'blog_post',
    pattern: '/article/:slug',
    page: 'blog/post'
  })