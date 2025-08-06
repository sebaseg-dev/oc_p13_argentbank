import { MAINCONFIG } from '../mainConfig.js'

export default async function apiPutUserInformation(token, firstname, lastname) {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }

    const raw = JSON.stringify({
      "firstName": firstname,
      "lastName": lastname,
    })

    const requestOptions = {
      method: "PUT",
      headers: headers,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${MAINCONFIG.serverUrl}/api/v1/user/profile`, requestOptions);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
}