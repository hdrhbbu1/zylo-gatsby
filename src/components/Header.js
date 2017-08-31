import React from 'react'
import Link from 'gatsby-link'
import Logo from './Logo'
import Hamburger from './Hamburger'
import GithubIcon from '../assets/images/github-icon.svg'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { menuToggled: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({menuToggled: !this.state.menuToggled})
  }

  render() {
    const { menuToggled } = this.state

    return (
      <nav className="main-navigation">
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <Logo />
          </Link>
        </h1>

        <div className={`mobile-collapse ${menuToggled ? 'open': ''}`}>
          <Link to="/about/" onClick={this.toggleMenu}>
            About
          </Link>
          <Link to="/projects/" onClick={this.toggleMenu}>
            Projects
          </Link>
          <Link to="/contact/" onClick={this.toggleMenu}>
            Contact
          </Link>
        </div>

        <a href="https://github.com/8ctopotamus" target="_blank" title="Zylo Github">
          <img src={GithubIcon} alt="Github icon" className="github-icon" />
        </a>

        <div onClick={this.toggleMenu}>
          <Hamburger />
        </div>
      </nav>
    )
  }
}

export default Header
