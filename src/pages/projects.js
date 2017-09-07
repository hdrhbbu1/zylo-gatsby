import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark

  const renderTagsList = (tags) => {
    if (tags) {
      return <ul className="post-preview_tags">
        {
          tags.map((tag, i)=> <li key={i}>{tag}</li>)
        }
      </ul>
    }
  }

  return (
    <div>
      <h1>Projects</h1>
      {
        posts.map((post, i) => (
          <div className="post-preview" key={i}>
            <Link to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
            </Link>
            {
              renderTagsList(post.node.frontmatter.tags)
            }
            <p>{ post.node.excerpt }</p>
            <Link className="btn btn-green" to={post.node.frontmatter.path}>View</Link>
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
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
