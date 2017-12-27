import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'

// Los estilos
import '../styles/reset.scss'
import '../styles/animations.scss'
import '../styles/style.scss'

const TemplateWrapper = ({children}) => (
    <div>

      <Helmet
        title="Zylo | Web Development"
        meta={[
          { name: 'description', content: 'Web Development' },
          { name: 'keywords', content: 'web, web development, graphic design, app development, programming' },
        ]}
      />

      <NavBar />

      <div className="content">
        { children() }
      </div>

    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
