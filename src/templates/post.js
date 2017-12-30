import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({data}) {
  const { markdownRemark: post } = data
  console.log('post', post)
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

      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />

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
        featuredImage {
          childImageSharp{
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
