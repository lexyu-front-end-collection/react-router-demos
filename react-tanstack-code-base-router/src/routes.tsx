import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import * as v from "valibot";
import { Home } from "./pages/Home";
import { Root } from "./components/root";
import { Dashboard } from "./pages/Dashboard";
import { PokemonDetail } from "./pages/PokemonDetail";
import getPokemon from "./apis/pokemon";
import { ItemFilters } from "./types/item-filters";
import { Search } from "./pages/Search";
import { Login } from "./pages/Login";
import { isAuthenticated } from "./utils/auth";

const rootRoute = createRootRoute({
    component: Root,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});


const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/dashboard",
    component: Dashboard,
    beforeLoad: () => {
        if (!isAuthenticated()) {
            throw redirect({
                to: "/login"
            })
        }
    }
})

const pokemonDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/pokemon/$pokemonId",
    component: PokemonDetail,
    loader: ({ params }) => getPokemon(params.pokemonId),
})

const searchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/search",
    validateSearch: (search) => v.parse(ItemFilters, search),
    component: Search,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: Login,
})

export const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute, pokemonDetailRoute, searchRoute, loginRoute]);