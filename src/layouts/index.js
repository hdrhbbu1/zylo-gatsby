import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Sketch from 'sketch-js'

import '../assets/styles/reset.scss'
import '../assets/styles/style.scss'

const TemplateWrapper = ({children}) => (
    <div>
      <Helmet
        title="Zylo | Web Development"
        meta={[
          { name: 'description', content: 'Web Development' },
          { name: 'keywords', content: 'web, web development, graphic design, app development, programming' },
        ]}
      />

      <Header />

      <div className="content">
        { children() }
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
