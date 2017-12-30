import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/zylo-eye-logo.svg'
import HomeIcon from '../images/home-icon.svg'
import Hamburger from './Hamburger'
import GithubIcon from './github-icon.svg'

class NavBar extends React.Component {
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

  toggleMenu(e) {
    this.setState({menuToggled: !this.state.menuToggled})
  }

  render() {
    const { menuToggled } = this.state

    let isHome
    if (typeof window !== 'undefined') {
      isHome = window.location.pathname === '/' ? true : false
    }

    return (
      <nav className="main-navigation">

        <Link to="/" className="logo">
          <img src={Logo} alt="zylo logo" />
        </Link>

        <div style={{flexGrow: 1}}>
          <div className={`mobile-collapse ${menuToggled ? 'open': ''}`}
               onClick={this.toggleMenu}>
            {
              !isHome && (
                <Link to="/" onClick={this.toggleMenu}>
                  <img className="home-icon" src={HomeIcon} alt="home" />
                </Link>
              )
            }
            <Link to="/about/" onClick={this.toggleMenu} activeClassName="active">
              about
            </Link>
            <Link to="/projects/" onClick={this.toggleMenu} activeClassName="active">
              projects
            </Link>
            <Link to="/contact/" onClick={this.toggleMenu} activeClassName="active">
              let's talk
            </Link>
            <a href="https://github.com/8ctopotamus" target="_blank" title="Zylo Github">
              <img className="github-icon" src={GithubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className={`nav-icon ${menuToggled ? 'open' : ''}`}
             onClick={this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    )
  }
}

export default NavBar
