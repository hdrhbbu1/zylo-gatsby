import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <h1>Projects</h1>
      {
        posts.map((post, i) => (
          <div className="post-preview" key={i}>
            <Link to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
            </Link>
            <p>{ post.node.excerpt }</p>
            <Link className="btn" to={post.node.frontmatter.path}>View</Link>
          </div>
        ))
      }
    </div>
  )
}

export default ProjectsPage

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
