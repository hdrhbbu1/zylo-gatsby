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
    <div>
      <h1 style={{display: 'none'}}>Projects</h1>

      {
        posts.map((post, i) => {
          console.log('Post: ', post.node)
          return (
            <div className="post-preview" key={i}>
              <div className="post-image" style={{backgroundImage: `url(${post.node.frontmatter.featuredImage.childImageSharp.sizes.src})`}} />


              <div className="post-details">
                <Link to={post.node.frontmatter.path}>
                  <h3>{post.node.frontmatter.title}</h3>
                </Link>

                { renderPostTags(post.node.frontmatter.tags) }

                <p>{ post.node.frontmatter.excerpt }</p>
                <Link className="btn btn-green" to={post.node.frontmatter.path}>View</Link>

              </div>
            </div>
        )})
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
