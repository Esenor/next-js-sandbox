module.exports = {
  register: (app) => {
    app.get('/api/v1/menu-taxonomy', function (req, res) {
      res.set('Content-Type', 'application/json')
      res.send([{
          name: 'Index',
          to: 'home_page',
          label: 'Index',
          template: '/',
          params: {},
          weight: 0
        },
        {
          name: 'About',
          to: 'about_page',
          label: 'About',
          template: '/about',
          params: {},
          weight: 99
        },
        {
          name: 'Engage open-source bandwidth',
          to: 'blog_post',
          label: 'Engage open-source bandwidth',
          template: '/blog/post',
          params: {
            slug: 'open-source-bandwidth'
          },
          weight: 25
        },
        {
          name: 'E-business networkeffects',
          to: 'blog_post',
          label: 'E-business networkeffects',
          template: '/blog/post',
          params: {
            slug: 'networkeffects'
          },
          weight: 22
        },
        {
          name: 'Bleeding-edge e-commerce',
          to: 'blog_post',
          label: 'Bleeding-edge e-commerce',
          template: '/blog/post',
          params: {
            slug: 'bleeding-edge-e-commerce'
          },
          weight: 23
        }
      ])
    })
  }
}
