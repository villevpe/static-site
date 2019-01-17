import React from 'react'
import styled from '../styles/styled-components'
import { Image } from '../pages'
import { Heading, HeadingLevel } from './Heading';

const Container = styled('div')`
  display: flex;
  min-height: 100vh;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
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

export const Section: React.SFC<Props> = ({ title, body, image }) => (
  <Container>
    <Wrapper>
      <Heading level={HeadingLevel.H3} text={title} />
      <Content dangerouslySetInnerHTML={{ __html: body }} />
    </Wrapper>
  </Container>
)
