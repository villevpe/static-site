import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import styled from '../styles/styled-components'
import { Section } from '../components/Section'
import { Footer } from '../components/Footer';
import { theme } from '../styles';
import { Home } from '../components/Home';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
`
interface ImageSource {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      src: string
      srcSet: string
      sizes: string
    }
  }
}

export interface Image {
  src: ImageSource
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
  items: { href: string, label: string, style: string }[]
}

interface FooterData {
  items: { href: string, label: string }[]
}

interface HomeData {
  title: string
  anchor: string
  image: Image
}

interface SectionData {
  title: string
  anchor: string
  image: Image
}

interface Props {
  data: {
    homeData: MarkdownRemarkData<HomeData>
    navbarData: MarkdownRemarkData<NavbarData>
    sectionData: MarkdownRemarkData<SectionData>
    footerData: MarkdownRemarkData<FooterData>
  }
}

const IndexPage: React.SFC<Props> = ({ data: { homeData = null, navbarData = null, sectionData = null, footerData = null } }) => {
  const home = homeData ? homeData.edges[0].node : null
  const navbar = navbarData ? navbarData.edges[0].node.frontmatter : null
  const sections = sectionData ? sectionData.edges.map(({ node: { html, frontmatter } }) => ({ body: html, ...frontmatter })) : null
  const footer = footerData ? footerData.edges[0].node.frontmatter : null
  return (
    <Layout>
      <>
        <Navbar items={navbar ? navbar.items : null} />
        <Container>
          {home && (
            <Home
              id={home.frontmatter.anchor}
              body={home.html}
              title={home.frontmatter.title}
              image={home.frontmatter.image}
              nextLink={sections[0].anchor}
            />
          )}
          {sections && sections.map(({ body, anchor, title, image }, i) => {
            const isAlternate = Boolean(i % 2)
            return (
              <Section
                key={i}
                id={anchor}
                body={body}
                title={title}
                image={image}
                isAlternate={isAlternate}
                background={isAlternate ? theme.color.section : theme.color.alternateSection}
                color={isAlternate ? theme.color.text : theme.color.alternateText}
                nextLink={i === sections.length - 1 ? undefined : sections[i + 1].anchor}
              />
            )
          })}
        </Container>
        <Footer items={footer ? footer.items : null} />
      </>
    </Layout>
  )
}


export const query = graphql`
  query {
    homeData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            anchor
            image {
              alt
              src {
                childImageSharp {
                  fluid(maxWidth: 2560) {
                    src
                    aspectRatio
                    srcSet
                    sizes
                  }
                }
              }
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
            anchor
            image {
              alt
              src {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                    aspectRatio
                    srcSet
                    sizes
                  }
                }
              }
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
              style
              href
            }
          }
        }
      }
    }
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
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
