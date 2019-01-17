import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const LogoImage: React.SFC<{}> = () => (
  <StaticQuery
    query={graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)