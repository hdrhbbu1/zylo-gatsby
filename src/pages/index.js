import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 style={{
      fontSize: '4em',
      marginTop: '12%',
    }}>
      Web Development
    </h1>
    <Link to="/contact/" style={{textDecoration: 'none'}}>
      <p style={{
        fontSize: '2em',
        marginTop: '5%',
      }}>
        Let's build something cool. 🤖
      </p>
    </Link>
  </div>
)

export default IndexPage
