import React, { AnchorHTMLAttributes } from 'react'
import styled from '../styles/styled-components'

const Anchor = styled('a')`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export const Link: React.SFC<Props> = ({ text, ...props }) => (
  <Anchor {...props}>
    {text}
  </Anchor>
)
