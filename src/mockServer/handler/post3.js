module.exports = {
  register: (app) => {
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
  }
}
