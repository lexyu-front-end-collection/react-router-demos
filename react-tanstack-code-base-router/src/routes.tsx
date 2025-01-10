import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";

import { Home } from "./pages/home";
import { Root } from "./components/root";
import { Dashboard } from "./pages/dashboard";

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
})

export const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute]);