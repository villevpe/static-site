import React, { HTMLAttributes } from 'react'
import styled from '../styles/styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Image } from '../pages'
import { Heading, HeadingLevel } from './Heading'
import { ArrowDown } from './ArrowDown';
import { theme } from '../styles';
import { scrollElementIntoView } from '../utils'
import Img from 'gatsby-image'

const Container = styled<{ backgroundColor: string, color: string }, 'div'>('div')`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  min-height: 100vh;
  width: 100%;
  padding: 2em;
`

const Wrapper = styled<{ hasImage: boolean }, 'div'>('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${({ hasImage }) => hasImage ? '1400px' : '800px'};
`

const Content = styled<{ hasImage: boolean }, 'div'>('div')`
  display: flex;
  width: ${({ hasImage }) => hasImage ? '50%' : '100%'};

  ${breakpoint('mobile', 'desktop')`
    width: 100%;
  `};

`

const ContentWrapper = styled<{ isAlternate: boolean }, 'div'>('div')`
  display: flex;
  flex-direction: ${({ isAlternate }) => isAlternate ? 'row-reverse' : 'row'};
  justify-content: space-between;

  ${breakpoint('mobile', 'desktop')`
    flex-direction: ${({ isAlternate }) => isAlternate ? 'column-reverse' : 'column'};
  `};
`

const LinkToNext = styled('a')`
  text-decoration: none;
  justify-content: center;
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.color.black};
  margin-top: 10vh;
  &:hover {
    > svg {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`

interface Props {
  title: string
  body: string
  background: string
  isAlternate: boolean
  image?: Image
  nextLink?: string
}

const onLinkClick = (event: React.MouseEvent<any>, id: string) => {
  event.preventDefault()
  scrollElementIntoView(id)
}

export const Section: React.SFC<Props & HTMLAttributes<HTMLDivElement>> = ({ isAlternate, title, body, image, background, color, nextLink, ...props }) => {
  const imageSrc = image && image.src
  return (
    <Container backgroundColor={background} color={color} {...props}>
      <Wrapper hasImage={imageSrc}>
        <Heading level={HeadingLevel.H2} text={title} color={color} />
        <ContentWrapper isAlternate={isAlternate}>
          {imageSrc && (
            <Img fluid={image.src.childImageSharp.fluid} style={{ minWidth: '40%' }} />
          )}
          <Content dangerouslySetInnerHTML={{ __html: body }} hasImage={imageSrc} />
        </ContentWrapper>
        {nextLink && (
          <LinkToNext onClick={(event) => onLinkClick(event, nextLink)}>
            <ArrowDown
              color={color || theme.color.black}
              width={theme.icon.size.M.width}
              height={theme.icon.size.M.height}
              strokeWidth='2'
            />
          </LinkToNext>
        )}
      </Wrapper>
    </Container>
  )
}
