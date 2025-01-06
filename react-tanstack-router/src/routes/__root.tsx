import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ItemFilters } from './search'

const styleProps = {
    style: {
        color: 'red',
        fontWeight: 'bold'
    }
}

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>

                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>

                <Link to="/posts"
                    search={{ q: '' }}
                    className="[&.active]:font-bold">
                    Posts
                </Link>

                <Link to="/pokemon"
                    // params={{ id: '1' }}
                    activeProps={styleProps}>
                    Pokemon
                </Link>

                <Link to='/search'
                    search={
                        {
                            query: 'Hello',
                            hasDiscount: false,
                            categories: ['electronics', 'clothing'],
                        } as ItemFilters
                    }>
                    Search
                </Link>



                <Link to="/profile"
                    className='font-bold p-2 ml-auto'
                    activeProps={styleProps}>
                    {({ isActive }) => <>{isActive && "~"} Profile {isActive && "~"}</>}
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})