import { Link } from 'react-router-dom'
import LoginButtons from './LoginButtons.jsx'

export default function Header() {
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
      <LoginButtons/>
    </nav>
  </>
}