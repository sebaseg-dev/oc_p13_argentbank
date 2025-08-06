import { Link } from 'react-router-dom'
import { toggleConnected } from '../redux.js'
import { useSelector } from 'react-redux'

export default function LoginButtons() {
  const userLogin = useSelector((state) => state.userLogin)

  const signIn = () => {
    return <>
      <div className="main-nav-menu">
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {userLogin.user.firstName}
        </Link>
        <Link to="#" className="main-nav-item" onClick={() => {
          dispatch(toggleConnected())
          navigate('/')
        }}>
          <i className="fa fa-sign-out"></i>Sign Out
        </Link>
      </div>
    </>
  }

  const signOut = () => {
    return <>
      <div className="main-nav-menu">
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </>
  }

  return <>
    {userLogin.connected ? signOut() : signIn()}
  </>
}