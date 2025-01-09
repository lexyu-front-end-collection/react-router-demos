import { createFileRoute, useRouter } from '@tanstack/react-router'
import { isAuthenticated, signIn, signOut } from '../utils/auth';

export const Route = createFileRoute('/login')({
    component: Login,
})

function Login() {
    const router = useRouter();
    console.log(router)

    return (
        <>
            <h1>Login</h1>
            {
                isAuthenticated() ? (
                    <>
                        <p>Hello User!</p>
                        <button className='m-10 bg-blue-500 text-white p-2'
                            onClick={async () => {
                                signOut();
                                router.invalidate();
                            }}>
                            Sign out
                        </button>
                    </>
                ) : (
                    <button className='m-10 bg-blue-500 text-white p-2'
                        onClick={async () => {
                            signIn();
                            router.invalidate();
                        }}
                    >
                        Sign in
                    </button>
                )
            }
        </>
    )
}
