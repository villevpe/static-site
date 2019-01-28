import React from 'react'
import styled from '../styles/styled-components'
import breakpoint from 'styled-components-breakpoint'
import { slide as Menu } from 'react-burger-menu'
import { Link } from './Link'

const Nav = styled('nav')`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.color.navbar};

  ${breakpoint('mobile', 'tablet')`
    padding: 0;
  `};
`

const Container = styled('div')`
  display: flex;
`

const OnlyInMobile = styled('div')`
  display: none;
  ${breakpoint('mobile', 'tablet')`
    display: flex;
  `};
`

const OnlyInDesktop = styled('div')`
  display: none;
  ${breakpoint('tablet')`
    display: flex;
  `};
`

const List = styled('ul')`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  outline: none;
  padding: 1em;
  align-items: center;
`
const Item = styled<{ logo: boolean }, 'li'>('li')`
  display: flex;
  cursor: pointer;
  list-style-type: none;
  padding: 0 30px;
  font-size: 1.3em;
  font-family: ${({ theme }) => theme.font.body};

  ${breakpoint('mobile', 'tablet')`
    padding: .5em 0;
  `};
  ${({ logo, theme }) => logo && `
    font-size: 1.7em;
  `};
`

const NavBarStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '20px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#373a47',
    borderRadius: '8px',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '36px',
    width: '36px',
    top: '15px',
    right: '15px',
  },
  bmCross: {
    background: '#373a47',
    height: '28px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#ffffff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

interface Props {
  items: {
    href: string
    style?: string
    label: string
  }[]
}

interface State {
  menuOpen: boolean
}

export class Navbar extends React.Component<Props, State> {
  state = {
    menuOpen: false
  }

  onLinkClick = () => {
    this.setState({ menuOpen: false })
  }

  renderItems = (items: any[]) => {
    return items && items.length > 0 ? (
      <List>
        {items.map((item, i) => (
          <Item key={i} onClick={this.onLinkClick} logo={item.style === 'logo'}>
            <Link href={item.href} text={item.label} />
          </Item>
        ))}
      </List>
    ) : null
  }

  render() {
    const { items } = this.props
    return (
      <Nav>
        <Container>
          <OnlyInMobile>
            <Menu styles={NavBarStyles} width={'70%'} isOpen={this.state.menuOpen}>
              {this.renderItems(items)}
            </Menu>
          </OnlyInMobile>
          <OnlyInDesktop>
            {this.renderItems(items)}
          </OnlyInDesktop>
        </Container>
      </Nav>
    )
  }
}
