export function setLoginCookie(token) {
    let expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1);
    expiryDate = expiryDate.toUTCString();
    document.cookie = `token=${token}; path="/"; expires=${expiryDate}`;
}

export function getLoginCookie() {
    let cookiesRaw = document.cookie.split("; ");
    const cookies = {};
    for (let cookie of cookiesRaw) {
        const entry = cookie.split("=");
        cookies[entry[0]] = entry[1];
    }
    return cookies;
}

export function deleteLoginCookie() {
    let expiryDate = new Date();
    expiryDate = expiryDate.toUTCString();
    document.cookie = `token=; expires=${expiryDate}`;
}
