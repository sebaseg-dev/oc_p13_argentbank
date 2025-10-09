import { MAINCONFIG } from "../mainConfig.js";

export default async function apiGetUserInformation(token) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const requestOptions = {
        method: "POST",
        headers: headers,
        redirect: "follow",
    };

    try {
        const response = await fetch(
            `${MAINCONFIG.serverUrl}/api/v1/user/profile`,
            requestOptions
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
