import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <h1>Projects</h1>
      {
        posts.map((post, i) => (
          <div key={i}>
            <h3>{post.node.frontmatter.title}</h3>
            { post.node.excerpt }
          </div>
        ))
      }
    </div>
  )
}

export default ProjectsPage

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
