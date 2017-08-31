import React from 'react'
import Link from 'gatsby-link'
import Logo from './Logo'
import Hamburger from './Hamburger'
import GithubIcon from './github-icon.svg'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { menuToggled: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentWillMount() {
    // media query event handler
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia("(min-width: 50em)")
      mq.addListener(this.WidthChange)
      this.WidthChange(mq)
    }
  }

  WidthChange = (mq) => {
    if (mq.matches) {
      // window width is at least 50em
      this.setState({toggleMenu: false})
    } else {
      // window width is less than 50em
    }
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
          <a href="https://github.com/8ctopotamus" target="_blank" title="Zylo Github">
            <img className="github-icon" src={GithubIcon} alt="Github icon" />
          </a>
        </div>

        <div className="hamburger"
          onClick={this.toggleMenu}>
          <Hamburger />
        </div>
      </nav>
    )
  }
}

export default Header
