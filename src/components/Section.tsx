import React, { HTMLAttributes } from 'react'
import styled from '../styles/styled-components'
import { Image } from '../pages'
import { Heading, HeadingLevel } from './Heading'

const Container = styled('div')`
  display: flex;
  min-height: 100vh;
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

interface Props {
  title: string
  body: string
  image?: Image
}

export const Section: React.SFC<Props & HTMLAttributes<HTMLDivElement>> = ({ title, body, image, ...props }) => (
  <Container {...props}>
    <Wrapper>
      <Heading level={HeadingLevel.H2} text={title} />
      <Content dangerouslySetInnerHTML={{ __html: body }} />
    </Wrapper>
  </Container>
)
