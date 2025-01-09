import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const { isLoggedIn } = context.authentication
    if (!isLoggedIn()) {
      throw redirect({
        to: '/login',
      })
    }
  },
})