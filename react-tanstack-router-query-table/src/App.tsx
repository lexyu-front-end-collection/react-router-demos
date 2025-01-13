import './App.css'
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>TanStack Router + Query + Table</h1>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
