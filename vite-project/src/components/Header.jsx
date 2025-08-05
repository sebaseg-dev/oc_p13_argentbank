import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConnected } from '../redux.js'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const userLogin = useSelector(state => state.userLogin)
  console.log(userLogin)

  const navigate = useNavigate()

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
        {userLogin.connected ?
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
          </div> :
          <div className="main-nav-menu">
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        }
    </nav>
  </>
}