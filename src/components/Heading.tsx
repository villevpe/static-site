import React, { HtmlHTMLAttributes } from 'react'
import styled from '../styles/styled-components'

export enum HeadingLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3'
}

interface Props extends HtmlHTMLAttributes<HTMLHeadElement> {
  text: string
  level: HeadingLevel
}

export const Heading: React.SFC<Props> = ({ text, level = HeadingLevel.H1, ...props }) => {
  const HeadElement = styled(level)`
    color: ${({ theme }) => theme.color.black}
  `
  return (
    <HeadElement {...props}>
      {text}
    </HeadElement>
  )
}
