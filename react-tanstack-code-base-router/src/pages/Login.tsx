import { useRouter } from '@tanstack/react-router'
import { isAuthenticated, signIn, signOut } from '../utils/auth';

export function Login() {
	const router = useRouter();

	return (
		<>
			<h1>Login</h1>
			{
				isAuthenticated() ? (
					<>
						<p>Hello User!</p>
						<button className=''
							onClick={async () => {
								signOut();
								router.invalidate();
							}}>
							Sign out
						</button>
					</>
				) : (
					<button className=''
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
