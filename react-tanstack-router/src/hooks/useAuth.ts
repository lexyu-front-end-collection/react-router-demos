/**
 * For React Custom Auth Hook
 */
export const useAuth = () => {
    const signIn = () => {
        localStorage.setItem('authenticated', 'true')
    }
    const signOut = () => {
        localStorage.removeItem('authenticated')
    }

    const isLoggedIn = () => {
        return localStorage.getItem('authenticated') === 'true'
    }

    return { signIn, signOut, isLoggedIn }
}

export type AuthContext = ReturnType<typeof useAuth>;