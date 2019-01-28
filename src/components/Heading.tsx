import React, { HtmlHTMLAttributes } from 'react'
import styled from '../styles/styled-components'

export enum HeadingLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3'
}

interface Props extends HtmlHTMLAttributes<HTMLHeadElement> {
  text: string
  level: HeadingLevel,
  color?: string
}

export const Heading: React.SFC<Props> = ({ text, color, level = HeadingLevel.H1, ...props }) => {
  const HeadElement = styled(level)`
    color: ${({ theme }) => color || theme.color.black};
    text-align: center;
  `
  return (
    <HeadElement {...props}>
      {text}
    </HeadElement>
  )
}
