import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
    component: Posts,
    validateSearch: (search) => {
        return {
            // q: (search.q as string) || '',
            q: (search.q ?? '') as string,
        }
    },
    loaderDeps: ({ search: { q } }) => ({ q }),
    loader: async ({ deps: { q } }) => {
        const posts = ['post1', 'post2', 'post3']
        return {
            posts: q ? posts.filter((post) => post.includes(q)) : posts
        }
    }
})

function Posts() {
    const { posts } = Route.useLoaderData()
    // const { q } = Route.useSearch()

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Posts</h1>
            <div className="grid gap-4">
                {posts.map(post => (
                    <div key={post}
                        className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200">
                        <Link
                            to='/posts/$postId'
                            params={{ postId: post }}
                            className="flex items-center justify-between text-gray-200 hover:text-blue-400"
                        >
                            <span className="text-lg">{post}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

