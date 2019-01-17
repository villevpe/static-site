import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { ProfileImage } from '../components/ProfileImage'
import { Heading, HeadingLevel } from '../components/Heading'
import { Navbar } from '../components/Navbar'
import styled from '../styles/styled-components'
import { Section } from '../components/Section';

const Container = styled('div')`
  display: flex;
  margin: auto;
  max-width: 800px;
  padding: 2em;
`

export interface Image {
  src: string
  alt: string
}

interface MarkdownRemarkData<T> {
  edges: {
    node: {
      id: string
      html?: string
      frontmatter: T
    }
  }[]
}

interface NavbarData {
  items: { href: string, label: string }[]
}

interface HomeData {
  title: string
  image: Image[]
}

interface SectionData {
  title: string
  image: Image
}

interface Props {
  data: {
    homeData: MarkdownRemarkData<HomeData>
    navbarData: MarkdownRemarkData<NavbarData>
    sectionData: MarkdownRemarkData<SectionData>
  }
}

const IndexPage: React.SFC<Props> = ({ data: { homeData = null, navbarData = null, sectionData = null } }) => {
  const home = homeData ? homeData.edges[0].node.frontmatter : null
  const navbar = navbarData ? navbarData.edges[0].node.frontmatter : null
  const sections = sectionData ? sectionData.edges.map(({ node: { html, frontmatter } }) => ({ body: html, ...frontmatter })) : null
  return (
    <Layout>
      <Container>
        <Navbar items={navbar ? navbar.items : null} />
        <Heading level={HeadingLevel.H1} text={home ? home.title : null} />
        {sections && sections.map(({ body, title, image }, i) => (
          <Section key={i} body={body} title={title} image={image} />
        ))}
      </Container>
    </Layout>
  )
}


export const query = graphql`
  query {
    homeData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              src
              alt
            }
          }
        }
      }
    }
    sectionData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "section" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image {
              src
              alt
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            items {
              label
              href
            }
          }
        }
      }
    }
  }
`

export default IndexPage
