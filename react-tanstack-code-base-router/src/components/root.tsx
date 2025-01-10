import { Link, Outlet } from "@tanstack/react-router";

const activeProps = {
    className: "font-bold",
};

export const Root = () => {
    return (
        <div className="">
            <h1 className="">
                TanStack Router - Code Based
            </h1>
            <nav>
                <ul className="">
                    <li>
                        <Link to="/" activeProps={activeProps}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" activeProps={activeProps}>
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};