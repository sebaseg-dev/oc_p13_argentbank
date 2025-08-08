import { Link } from 'react-router-dom'
import { toggleConnected } from '../redux.js'
import { useSelector } from 'react-redux'
import { deleteLoginCookie } from '../services/localStorage.js'

export default function LoginButtons () {
    const userLogin = useSelector((state) => state.userLogin)

    const signOut = () => {
        return <>
            <div className="main-nav-menu">
                <Link className="main-nav-item" to="/profile">
                    <i className="fa fa-user-circle"></i>
                    <span>{userLogin.user.firstName}</span>
                </Link>
                <Link to="#" className="main-nav-item" onClick={() => {
                    deleteLoginCookie()
                    dispatch(toggleConnected())
                    navigate('/')
                }}>
                    <i className="fa fa-sign-out"></i><span>Sign Out</span>
                </Link>
            </div>
        </>
    }

    const signIn = () => {
        return <>
            <div className="main-nav-menu">
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    <span>Sign In</span>
                </Link>
            </div>
        </>
    }

    return <>
        {userLogin.connected ? signOut() : signIn()}
    </>
}