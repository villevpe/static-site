import React, { HTMLAttributes } from 'react'
import styled from '../styles/styled-components'
import { Image } from '../pages'
import { Heading, HeadingLevel } from './Heading'
import { ArrowDown } from './ArrowDown';
import { theme } from '../styles';
import { scrollElementIntoView } from '../utils';

const Container = styled<{ backgroundColor: string, color: string }, 'div'>('div')`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  min-height: 100vh;
  width: 100%;
  padding: 2em;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`

const Content = styled('div')`
  display: flex;
`

const LinkToNext = styled('a')`
  text-decoration: none;
  justify-content: center;
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.color.black};
  &:hover {
    > svg {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`

interface Props {
  title: string
  body: string
  image?: Image[]
  nextLink?: string
}

const onLinkClick = (event: React.MouseEvent<any>, id: string) => {
  event.preventDefault()
  scrollElementIntoView(id)
}

export const Home: React.SFC<Props & HTMLAttributes<HTMLDivElement>> = ({ title, body, image, nextLink, ...props }) => (
  <Container {...props}>
    <Wrapper>
      <Heading level={HeadingLevel.H2} text={title} />
      <Content dangerouslySetInnerHTML={{ __html: body }} />
      {nextLink && (
        <LinkToNext onClick={(event) => onLinkClick(event, nextLink)}>
          <ArrowDown
            color={theme.color.black}
            width={theme.icon.size.M.width}
            height={theme.icon.size.M.height}
            strokeWidth='2'
          />
        </LinkToNext>
      )}
    </Wrapper>
  </Container>
)