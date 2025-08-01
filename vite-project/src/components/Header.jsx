import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConnected } from '../redux.js'

export default function Header() {
  const userLogin = useSelector(state => state.userLogin)
  console.log(userLogin)

  const dispatch = useDispatch()

  return <>
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userLogin.connected ?
          <Link className="main-nav-item" to="/" onClick={() => {dispatch(toggleConnected())}}>
            <i className="fa fa-user-circle"></i>Sign Out
          </Link> :
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>Sign In
          </Link>
        }
      </div>
    </nav>
  </>
}