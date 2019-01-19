import React, { AnchorHTMLAttributes } from 'react'
import styled from '../styles/styled-components'
import { scrollElementIntoView } from '../utils';

const Anchor = styled('a')`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

const onLinkClick = (event: React.MouseEvent<any>, href: string) => {
  if (href.startsWith('#')) {
    event.preventDefault()
    scrollElementIntoView(href.replace('#', ''))
  }
}

export const Link: React.SFC<Props> = ({ text, href, ...props }) => (
  <Anchor {...props} onClick={(event) => onLinkClick(event, href)}>
    {text}
  </Anchor>
)
