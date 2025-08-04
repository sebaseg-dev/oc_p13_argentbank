import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUserFetched, setUserInfo } from '../redux.js'
import { useEffect, useState } from 'react'

export default function Profile() {
  document.title = 'Argent Bank - Profile Page'

  const userLogin = useSelector(state => state.userLogin)
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)
  const [firstNameInputValue, setFirstNameInputValue] = useState(null)
  const [lastNameInputValue, setLastNameInputValue] = useState(null)

  console.log("depuis profile : ", userLogin)


  useEffect(() => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + userLogin.token);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("Fetch depuis profile ", result);
          if (result.status === 200){
            dispatch(toggleUserFetched());
            dispatch(setUserInfo({
              firstName: result.body.firstName,
              lastName: result.body.lastName,
            }));
          } else {
            console.error(result.statusText);
          }
        })
        .catch((error) => console.error(error));
  }, [editMode])

  const handleSave = () => {
    console.log("HANDLE_SAVE")
    console.log(firstNameInputValue, lastNameInputValue)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + userLogin.token);
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
      "firstName": firstNameInputValue,
      "lastName": lastNameInputValue,
    })

    console.log(raw);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        setEditMode(false)
      })
      .catch((error) => console.error(error));
  }


  //early return if the user is not connected
  if (!userLogin.connected){
    return <><Header></Header><div>Not connected</div></>
  }

  return <>
    <Header/>

    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br/>{userLogin.user.firstName} {userLogin.user.lastName}!</h1>

        {editMode ? (<>
            <input type={"text"} value={firstNameInputValue} onChange={(e) => {setFirstNameInputValue(e.target.value)}}/>
            <input type={"text"} value={lastNameInputValue} onChange={(e) => {setLastNameInputValue(e.target.value)}}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => { setEditMode(false)} }>Cancel</button>
          </>
        ) : (
          <button className="edit-button" onClick={() => {
            setEditMode(true)
            setFirstNameInputValue(userLogin.user.firstName);
            setLastNameInputValue(userLogin.user.lastName);
          }}>Edit Name</button>
        )}

      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>

    <Footer/>
  </>
}