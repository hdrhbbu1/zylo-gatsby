import Img from 'gatsby-image'
import React from 'react'
import Link from 'gatsby-link'

const ProjectsPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark

  const renderPostTags = (tags) => {
    if (tags) {
      return <ul className="post-preview_tags">
        {
          tags.map((tag, i)=> <li key={i}>{tag}</li>)
        }
      </ul>
    }
  }

  return (
    <div className="projects-page">
      <h1 style={{display: 'none'}}>Projects</h1>

      {
        posts.map((post, i) => {
          // console.log('Post: ', post.node)
          return (
            <div className="post-preview" key={i}>
              <div className="post-details">

                <Link to={post.node.frontmatter.path}
                  className="btn btn-green"
                  style={{
                    float: 'right'
                  }}>
                  View
                </Link>

                <Link to={post.node.frontmatter.path}>
                  <h3>{post.node.frontmatter.title}</h3>
                </Link>

                { renderPostTags(post.node.frontmatter.tags) }
              </div>

              <Link to={post.node.frontmatter.path}>
                <Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
              </Link>

            </div>
        )})
      }
    </div>
  )
}

export default ProjectsPage

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            tags
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
    }
  }
`
