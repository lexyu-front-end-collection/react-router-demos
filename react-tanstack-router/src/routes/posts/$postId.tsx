import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
    component: RouteComponent,
    loader: async ({ params }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // throw new Error()
        return {
            postId: params.postId
        }
    },
    pendingComponent: () => <div className='text-2xl font-extrabold italic text-white bg-black'>Loading Data...</div>,
    errorComponent: () => <div>Error...</div>
})


function RouteComponent() {
    const { postId } = Route.useLoaderData();
    return <div className='text-2xl font-extrabold italic text-green-700'>Hello {postId}!</div>
}
