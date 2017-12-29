import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import NavBar from '../components/NavBar'
import Particles from 'react-particles-js'
import PropTypes from 'prop-types'
import React from 'react'
import ScrollToTop from 'react-scroll-up'
import UpArrow from '../images/up-arrow.svg'

// Los estilos
import '../styles/reset.scss'
import '../styles/animations.scss'
import '../styles/grid.scss'
import '../styles/style.scss'

const TemplateWrapper = ({children}) => (
    <div>

      <Helmet
        title="Zylo | Web Development"
        meta={[
          { name: 'description', content: 'Web Development' },
          { name: 'keywords', content: 'web, web development, graphic design, app development, programming, iot, vr, unity, web apps' },
        ]}
      />

      <Particles
        params={{
      		particles: {
            size: {
              value: 5,
              random: true
            },
            number: {
              value: 55
            },
            color: {
              value: '#00D466'
            },
      			line_linked: {
              color: '#298BB3',
      				shadow: {
      					enable: true,
      					color: "#DAE1EA",
      					blur: 5
      				}
      			}
      		}
      	}}
        style={{
          height: '100%',
          position: 'fixed',
          width: '100%',
          zIndex: -10,
        }} />

      <NavBar />

      <div className="content">
        { children() }
      </div>

      <ScrollToTop showUnder={160} style={{bottom: 10}}>
        <img src={UpArrow} className="up-arrow" alt="scroll up" />
      </ScrollToTop>

    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
