import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import apiGetToken from '../services/apiGetToken.js'
import { setToken, toggleConnected } from '../redux.js'

export default function Login () {
  document.title = 'Argent Bank - Login Page'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginRequest = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const result = await apiGetToken(username.value, password.value)

    if (result.status === 200) {
      dispatch(toggleConnected());
      dispatch(setToken(result.body.token));
      navigate("/profile");
    } else if (result.message === "Error: Password is invalid") {
      password.value = "";
      password.classList.add('invalid-form-field');
      console.error(result.message);
    } else {
      username.value = "";
      username.classList.add('invalid-form-field');
      password.value = "";
      console.error(result.message);
    }
  }

  return <>
    <Header/>

    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper" onInput={(e) => {e.target.classList.remove('invalid-form-field')}}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
          </div>
          <div className="input-wrapper" onInput={(e) => {e.target.classList.remove('invalid-form-field')}}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={(e) => {loginRequest(e)}}>Sign In</button>
        </form>
      </section>
    </main>

    <Footer/>
  </>
}