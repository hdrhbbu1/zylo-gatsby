import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="IndexPage">
    <h2>
      Digital solutions
    </h2>
    <p>Building cool things for the Web, VR & I.o.T.</p>
    <Link to="/about/" className="btn btn-blue" style={{textDecoration: 'none', marginRight: 12}}>
      What?
    </Link>
    <Link to="/contact/" className="btn btn-green" style={{textDecoration: 'none'}}>
      Let's do this!
    </Link>
  </div>
)

export default IndexPage
