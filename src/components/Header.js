import React from 'react'
import Link from 'gatsby-link'
import Logo from './Logo'
import GithubIcon from '../assets/images/github-icon.svg'

const Header = () => (
  <nav className="main-navigation">
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <Link to="/about/">
    About
    </Link>
    <Link to="/projects/">
      Projects
    </Link>
    <Link to="/contact/">
      Contact
    </Link>
    <a href="https://github.com/8ctopotamus" target="_blank" title="Zylo Github">
      <img src={GithubIcon} alt="Github icon" className="github-icon" />
    </a>
  </nav>
)

export default Header
