import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '../utils/auth'

export const Route = createFileRoute('/profile')({
  /* 1.
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
      })
    }
  },
   */
  // 2. Custom Hook
  beforeLoad: ({ context }) => {
    const { isLoggedIn } = context.authentication
    if (!isLoggedIn()) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: Profile,
})

function Profile() {
  return <div>Hello "/profile"!</div>
}
