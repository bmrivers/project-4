function setToken(token) {
    if(token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
}

function getToken() {
    let token = localStorage.getItem('token')
    if (token) {
        // Check if expired; if so, remove
        const payload = JSON.parse(atob(token.split('.')[1]));
        // JWT's exp is expressed in secs not ms, so convert
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token;
}

function removeToken() {
    localStorage.removeItem('token');
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken
}