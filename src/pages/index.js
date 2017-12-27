import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="IndexPage">
    <h2>
      DIGITAL SOLUTIONS
    </h2>
    <Link to="/contact/" style={{textDecoration: 'none'}}>
      <p>Web, VR, IoT</p>
      {/* <p>Let's make something cool.</p> */}
    </Link>
  </div>
)

export default IndexPage
