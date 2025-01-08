/**
 * For React Custom Auth Hook
 */
const useAuth = () => {
    const signIn = () => {
        localStorage.setItem('isAuthenticated', 'true')
    }
    const signOut = () => {
        localStorage.removeItem('isAuthenticated')
    }

    const isLoggedIn = () => {
        return localStorage.getItem('isAuthenticated') === 'true'
    }

    return { signIn, signOut, isLoggedIn }
}

export type AuthContext = ReturnType<typeof useAuth>;