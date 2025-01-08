import { createFileRoute, useRouter } from '@tanstack/react-router'
import { isAuthenticated } from '../utils/auth';

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
                    <></>
                ) : (
                    <></>
                )
            }
        </>
    )
}
