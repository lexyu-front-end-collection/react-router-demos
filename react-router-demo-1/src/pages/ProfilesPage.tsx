import { NavLink, Outlet } from "react-router-dom"

export const profiles = [1, 2, 3, 4, 5];

export default function ProfilesPage() {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col gap-2 text-4xl">
                {/* <h1>Profiles Page</h1> */}
                {profiles
                    .map(profile => (
                        <NavLink
                            key={profile}
                            to={`/profiles/${profile}`}
                            className={({ isActive }) => isActive ? "text-red-500" : undefined}>
                            Profile {profile}
                        </NavLink>
                    ))}
            </div>
            <Outlet></Outlet>
        </div>
    )
}