import React from 'react'
import styled from '../styles/styled-components'
import { Link } from './Link';


const Nav = styled('nav')`
  display: flex;
  width: 100%;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.navbar};
`

const Container = styled('div')`
  display: flex;
`

const List = styled('ul')`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`
const Item = styled('li')`
  display: flex;
  list-style-type: none;
  padding: 0 2em;
  font-size: 1.1em;
`

interface MenuItemList {
  items: {
    href: string
    label: string
  }[]
}


export const Navbar: React.SFC<MenuItemList> = ({ items }) => (
  <Nav>
    <Container>
      {items && items.length > 0 && (
        <List>
          {items.map((item, i) => (
            <Item key={i}>
              <Link href={item.href} text={item.label} />
            </Item>
          ))}
        </List>
      )}
    </Container>
  </Nav>
)
