import React, { FunctionComponent } from 'react'
import { Tabbable } from 'reakit'

type Props = {
  expanded: boolean,
  children?: never,
}

const Navbar: FunctionComponent<Props> = ({ expanded }) => {
  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <div className={'navbar' + (expanded ? ' navbar--expanded' : '')}>
      <div className="links">
        <Tabbable as={'li'} className="selected">Home</Tabbable>
        <Tabbable as={'li'}>Recently added</Tabbable>
        <Tabbable as={'li'}>My list</Tabbable>
      </div>

      <Tabbable
        className="logo"
        as="img"
        src="/netflix-logo.png"
        alt="Netflix-logo"
        onClick={handleLogoClick}
      />

      <div className="navbar-right">
        <Tabbable as="div" className="search-button">
          <img src="/search-icon.svg" className="icon" />{' '}
          Search...
        </Tabbable>
        <Tabbable as="a" href="https://github.com/httpiago/navbar-as-splashscreen-demo">
          <img src="/github-icon.svg" className="icon" title="View source on GitHub" />
        </Tabbable>
        <Tabbable as="a" href="https://www.iagobruno.com/">
          <img src="https://github.com/httpiago.png" className="avatar" />
          <span className="name">By<br/>Iago Bruno</span>
        </Tabbable>
      </div>
    </div>
  )
}


export default Navbar
