const express = require('express')
const cors = require('cors')

module.exports = {
  run: async (port = 3042) => {
    return new Promise((resolve, reject) => {
      const app = express()
      app.use(cors())
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

      app.get('/api/v1/post/bleeding-edge-e-commerce', function (req, res) {
        setTimeout(() => {

          res.set('Content-Type', 'application/json')
          res.send({
            label: 'Bleeding-edge e-commerce',
            content: {
              text: 'Bleeding-edge e-commerce e-business tagclouds; markets rss-capable killer remix dynamic remix cross-platform, "incentivize compelling plug-and-play integrateAJAX-enabled B2B experiences citizen-media schemas deploy dynamic infrastructures long-tail." Syndicate, life-hacks infomediaries real-time wireless ROI aggregate blogging addelivery e-business. Utilize addelivery addelivery integrate, interactive. Integrate scalable repurpose generate deliverables ubiquitous wireless magnetic integrate, morph whiteboard strategic reintermediate incentivize incubate enable. Dynamic engineer partnerships share: e-tailers: granular world-class vertical? Global, user-centred disintermediate, frictionless social viral disintermediate. Networks granular value, design, value scalable cross-platform holistic: utilize scalable methodologies aggregate.'
            }
          })
        }, 250)
      })

      app.get('/api/v1/post/open-source-bandwidth', function (req, res) {
        setTimeout(() => {

          res.set('Content-Type', 'application/json')
          res.send({
            label: 'Engage open-source bandwidth',
            content: {
              text: 'Engage open-source bandwidth markets long-tail engage empower ecologies addelivery standards-compliant life-hacks unleash maximize scale users supply-chains integrate dynamic. Weblogs webservices methodologies user-contributed compelling monetize tagclouds user-contributed platforms, applications value-added empower capture; communities strategic, customized." Streamline, enterprise holistic? 24/7 back-end, global morph syndicate infomediaries compelling next-generation enterprise: deploy strategize, "synergies architect redefine; end-to-end, viral strategic ubiquitous viral." Innovative, repurpose rich blogging unleash syndicate sexy, web services world-class synergies generate; feeds webservices." Granular compelling iterate e-services, life-hacks, out-of-the-box disintermediate bricks-and-clicks scalable transition aggregate sexy next-generation end-to-end. Impactful blogospheres long-tail bricks-and-clicks compelling engage capture syndicate collaborative widgets web-readiness, embrace virtual killer matrix rich granular; viral disintermediate value-added. Iterate solutions podcasts optimize benchmark open-source killer; brand blogospheres authentic frictionless compelling capture synthesize e-services envisioneer bleeding-edge extensible.E-business networkeffects beta-test world-class infrastructures harness monetize e-services out-of-the-box synthesize webservices synergistic. Value-added synergistic orchestrate integrate webservices citizen-media integrate one-to-one relationships holistic extend seize. Leading-edge long-tail dot-com value-added A-list maximize platforms next-generation facilitate one-to-one. Weblogs systems wireless, integrate distributed wikis extensible clicks-and-mortar sexy rss-capable share methodologies. Benchmark design strategic, leverage scale redefine viral bricks-and-clicks innovative life-hacks morph technologies revolutionary tagclouds podcasting matrix. Mission-critical webservices, content--interactive ROI incubate visionary deploy harness user-centred distributed deliverables disintermediate iterate transform post viral technologies communities. Harness rich-clientAPIs proactive intuitive collaborative impactful channels drive data-driven bandwidth rich-clientAPIs tagclouds addelivery semantic communities, innovative? Convergence ROI ecologies e-tailers syndicate reinvent, mashups impactful e-commerce evolve infomediaries holistic. Widgets enterprise collaborative extend 24/7 capture synergistic content maximize enhance eyeballs aggregate infrastructures.'
            }
          })
        }, 250)
      })

      app.get('/api/v1/post/networkeffects', function (req, res) {
        setTimeout(() => {

          res.set('Content-Type', 'application/json')
          res.send({
            label: 'E-business networkeffects',
            content: {
              text: 'E-business networkeffects beta-test world-class infrastructures harness monetize e-services out-of-the-box synthesize webservices synergistic. Value-added synergistic orchestrate integrate webservices citizen-media integrate one-to-one relationships holistic extend seize. Leading-edge long-tail dot-com value-added A-list maximize platforms next-generation facilitate one-to-one. Weblogs systems wireless, integrate distributed wikis extensible clicks-and-mortar sexy rss-capable share methodologies. Benchmark design strategic, leverage scale redefine viral bricks-and-clicks innovative life-hacks morph technologies revolutionary tagclouds podcasting matrix. Mission-critical webservices, content--interactive ROI incubate visionary deploy harness user-centred distributed deliverables disintermediate iterate transform post viral technologies communities. Harness rich-clientAPIs proactive intuitive collaborative impactful channels drive data-driven bandwidth rich-clientAPIs tagclouds addelivery semantic communities, innovative? Convergence ROI ecologies e-tailers syndicate reinvent, mashups impactful e-commerce evolve infomediaries holistic. Widgets enterprise collaborative extend 24/7 capture synergistic content maximize enhance eyeballs aggregate infrastructures.'
            }
          })
        }, 250)
      })

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