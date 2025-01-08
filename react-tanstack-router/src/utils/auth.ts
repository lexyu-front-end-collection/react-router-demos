function isAuthenticated() {
    return localStorage.getItem('authenticated') === "true";
}

async function signIn() {
    localStorage.setItem('authenticated', 'true')
}

async function signOut() {
    localStorage.removeItem('authenticated')
}


export { isAuthenticated, signIn, signOut }