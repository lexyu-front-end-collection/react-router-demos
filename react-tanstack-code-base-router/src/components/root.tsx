import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

const activeProps = {
    className: "font-bold",
};

export const Root = () => {
    const [pokemonId, setPokemonId] = useState("");

    const handleSearch = () => {
        window.location.href = `/pokemon/${pokemonId}`;
    };

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
                        <Link
                            to="/dashboard"
                            activeProps={activeProps}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <input
                            type="text"
                            value={pokemonId}
                            onChange={(e) => setPokemonId(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Enter Pokémon ID"
                        />
                        <button onClick={handleSearch}>Search Pokémon</button>
                    </li>

                    <li>
                        <Link to="/search" activeProps={activeProps}>
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" activeProps={activeProps}>
                            Login
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