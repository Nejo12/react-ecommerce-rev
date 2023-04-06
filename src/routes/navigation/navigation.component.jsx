import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <img
            className='logo'
            src='https://i.ibb.co/hZQj6np/mill-157613-640.png'
            alt='nav-logo'
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation