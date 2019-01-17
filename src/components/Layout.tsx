import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, theme, GlobalStyle } from '../styles'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface SiteData {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      keywords: string,
      canonicalUrl: string
    }
  }
}

export const Layout: React.SFC<{ children: React.ReactChild }> = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata } }: SiteData) => (
      <>
        <Helmet>
          <html lang='fi' />
          <meta charSet="utf-8" />
          <meta name="description" content={siteMetadata.description} />
          <meta name="keywords" content={siteMetadata.keywords} />
          <link rel="canonical" href={siteMetadata.canonicalUrl} />
          <title>{siteMetadata.title}</title>
        </Helmet>
        <ThemeProvider theme={theme} >
          <>
            {children}
            <GlobalStyle theme={theme} />
          </>
        </ThemeProvider>
      </>
    )}
  />
)
