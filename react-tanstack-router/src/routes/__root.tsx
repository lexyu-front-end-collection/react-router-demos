import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ItemFilters } from './search'
import { AuthContext } from '../hooks/useAuth'

const styleProps = {
    style: {
        color: 'red',
        fontWeight: 'bold'
    }
}

type RouterContext = {
    authentication: AuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <>
            <div className="flex flex-wrap gap-2 p-2">
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

                <Link to='/login'>
                    Login
                </Link>

                <Link to="/dashboard" >
                    Dashboard
                </Link>

                <Link to="/settings">
                    Settings
                </Link>

                <Link to="/first-level">
                    First Level
                </Link>

                <Link to="/layouts/visibleLayout">
                    Visible Layouts
                </Link>

                <Link to="/foo/bar/baz">
                    Nested Path
                </Link>

                <Link to="/one/two/three">
                    One.Two.Three
                </Link>

                <Link to="/profile"
                    className='p-2 ml-auto font-bold'
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