import { createFileRoute, redirect, useBlocker } from '@tanstack/react-router'
import { isAuthenticated } from '../utils/auth'
import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

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
    const [name, setName] = useState('')
    const { proceed, reset, status, next } = useBlocker({
        shouldBlockFn: () => {
            console.log(name)
            if (!!name) {
                return window.confirm(`Are you sure you want to leave?`)
            }
            return false
        },
        withResolver: true
    })
    console.log("status", status)
    console.log("proceed", proceed)
    console.log("reset", reset)

    return (
        <div>
            <h1>Hello "/profile"!</h1>
            <Input
                className='w-48'
                value={name}
                onChange={e => setName(e.target.value)} />
            {/* Ver 1 */}
            {
                status === "blocked" &&
                (
                    <div>
                        Are you sure want to proceed
                        <div className='flex gap-2'>
                            <Button variant="outline" onClick={proceed}>
                                Yes
                            </Button>
                            <Button variant="outline" onClick={reset}>
                                No
                            </Button>
                        </div>
                    </div>
                )}

            {/* Ver 2 */}
        </div>
    )
}


