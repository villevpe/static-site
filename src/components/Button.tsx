import React, { ButtonHTMLAttributes } from 'react'
import styled from '../styles/styled-components'

const Element = styled('button')`
  color: ${({ theme }) => theme.color.black}
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button: React.SFC<Props> = ({ text, ...props }) => (
  <Element {...props}>
    {text}
  </Element>
)
