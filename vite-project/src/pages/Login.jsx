import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleConnected, setToken } from '../redux.js'
import { useNavigate } from 'react-router'

export default function Login () {
  document.title = 'Argent Bank - Login Page'

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const navigate = useNavigate()

  //request from postman
  const myFetch = (email, password) => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3001/api/v1/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          console.log('login successful');
          console.log(userLogin);
          dispatch(toggleConnected());
          dispatch(setToken(result.body.token));
          navigate("/profile");
        } else {
          console.error(result.statusText);
        }

      })
      .catch((error) => console.error(error));
  }

  const loginRequest = (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('loginRequest - username: ', username, " - password: ", password)

    myFetch(username, password)
  }

  return <>
    <Header/>

    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password"/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"/><label
            htmlFor="remember-me"
          >Remember me</label
          >
          </div>
          {/*PLACEHOLDER DUE TO STATIC SITE*/}
          {/*<Link to="/profile" className="sign-in-button" onClick={(e) => {loginRequest(e)}}>Sign In</Link>*/}
          {/*SHOULD BE THE BUTTON BELOW*/}
          <button className="sign-in-button" onClick={(e) => {loginRequest(e)}}>Sign In</button>

        </form>
      </section>
    </main>

    <Footer/>
  </>
}