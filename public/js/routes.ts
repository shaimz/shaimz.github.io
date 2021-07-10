import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

function load(component) {
    return () => import(/* webpackChunkName: "frontend-chunk-" */ /* webpackPreload: true */`./components/public/${component}.vue`)
}

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: load('Home'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
