import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getLoginCookie } from '../services/localStorage.js'
import { setToken, setUserInfo } from '../redux.js'
import apiGetUserInformation from '../services/apiGetUserInformation.js'

export default function Layout () {
    const dispatch = useDispatch()

    useEffect(() => {
        async function hydrateStore () {
            const cookieToken = getLoginCookie()

            if (cookieToken.token) {
                dispatch(setToken(cookieToken.token))

                const userInformation = await apiGetUserInformation(cookieToken.token)
                const firstname = userInformation.body.firstName
                const lastname = userInformation.body.lastName

                await dispatch(setUserInfo({
                    firstName: firstname,
                    lastName: lastname,
                }))
            }
        }

        hydrateStore()
    }, [])

    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}