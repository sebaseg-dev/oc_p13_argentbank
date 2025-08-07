import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUserFetched, setUserInfo } from '../redux.js'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import apiGetUserInformation from '../services/apiGetUserInformation.js'
import apiPutUserInformation from '../services/apiPutUserInformation.js'
import { PlaceholderProfileAccounts } from '../components/PlaceholderData.jsx'

export default function Profile() {
  document.title = 'Argent Bank - Profile Page'

  const userLogin = useSelector(state => state.userLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [editMode, setEditMode] = useState(false)
  const [firstNameInputValue, setFirstNameInputValue] = useState(null)
  const [lastNameInputValue, setLastNameInputValue] = useState(null)

  const fetchData = async (token) => {
    const result = await apiGetUserInformation(token);

    if (result.status === 200) {
      dispatch(toggleUserFetched());
      dispatch(setUserInfo({
        firstName: result.body.firstName,
        lastName: result.body.lastName,
      }));
    } else if (result.status === 401) {
      navigate('/');
    }
  }

  useEffect(() => {
    async function initialiseData() {
      await fetchData(userLogin.token);
    }
    initialiseData();
  }, [editMode]);

  return <>
    <Header/>

    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back</h1>

        {editMode ? (<div className="profile-edit-form">
            <div className="profile-edit-form__input-fields">
              <input type={"text"} value={firstNameInputValue} onChange={(e) => {setFirstNameInputValue(e.target.value)}}/>
              <input type={"text"} value={lastNameInputValue} onChange={(e) => {setLastNameInputValue(e.target.value)}}/>
            </div>
            <div className="profile-edit-form__buttons">
              <button className="save-button" onClick={async () => {
                const response = await apiPutUserInformation(userLogin.token ,firstNameInputValue, lastNameInputValue);
                if (response.status === 200) {
                  setEditMode(false)
                }
              }}>Save</button>
              <button className="cancel-button" onClick={() => { setEditMode(false) } }>Cancel</button>
            </div>
          </div>
        ) : (<div>
            <h1>{userLogin.user.firstName} {userLogin.user.lastName}!</h1>
            <button className="edit-button" onClick={() => {
              setEditMode(true)
              setFirstNameInputValue(userLogin.user.firstName);
              setLastNameInputValue(userLogin.user.lastName);
            }}>Edit Name</button>
          </div>
        )}

      </div>

      <PlaceholderProfileAccounts/>

    </main>

    <Footer/>
  </>
}