import { MAINCONFIG } from '../mainConfig.js'

export default async function apiGetToken (email, password) {
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const body = JSON.stringify({
        'email': email,
        'password': password,
    })

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    }

    try {
        const response = await fetch((MAINCONFIG.serverUrl + '/api/v1/user/login'), requestOptions)
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}