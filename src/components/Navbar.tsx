import React from 'react'
import styled from '../styles/styled-components'
import { slide as Menu } from 'react-burger-menu'
import { Link } from './Link'
import { isMobileViewPort } from '../utils';


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

const renderItems = (items: any[]) => {
  return items && items.length > 0 ? (
    <List>
      {items.map((item, i) => (
        <Item key={i}>
          <Link href={item.href} text={item.label} />
        </Item>
      ))}
    </List>
  ) : null
}

export const Navbar: React.SFC<MenuItemList> = ({ items }) => (
  <Nav>
    <Container>
      {isMobileViewPort() ?
        (
          <Menu>
            {renderItems(items)}
          </Menu>
        )
        :
        (
          <>
            {renderItems(items)}
          </>
        )
      }

    </Container>
  </Nav>
)
