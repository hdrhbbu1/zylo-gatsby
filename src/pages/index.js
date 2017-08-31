import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="IndexPage">
    <h1>
      Web Development
    </h1>
    <Link to="/contact/" style={{textDecoration: 'none'}}>
      <p>Let's build something cool. 🤖</p>
    </Link>
  </div>
)

export default IndexPage
