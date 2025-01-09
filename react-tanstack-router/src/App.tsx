import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { useAuth } from './hooks/useAuth'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const authentication = useAuth();
  return (
    <>
      <RouterProvider router={router} context={{ authentication }} />
    </>
  )
}

export default App
