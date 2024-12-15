import { Link } from 'react-router-dom'

export default function NotFoundPage() {

    return (
        <div className='flex flex-col gap-2 text-xl'>
            <h1>404 Not Found</h1>
            <Link to="/"><h2>Go Home</h2></Link>
            <a href="/"><h2>Go Home From A tag</h2></a>
        </div>
    )
}