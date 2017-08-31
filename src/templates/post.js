import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({data}) {
  const { markdownRemark: post } = data
  return (
    <div className="post">
      <Link
        to="/projects/"
        style={{
          display: 'inline-block',
          marginBottom: '50px'
        }}>
          ⬅ Back
      </Link>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
