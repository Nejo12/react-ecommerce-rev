import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
          { currentUser ? (
            <span className="nav-link" onClick={ signOutHandler }>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to='/auth'>
              Sign In
            </Link>
          ) }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation