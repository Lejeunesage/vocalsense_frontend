import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Config from "@/components/ConfigComponent.vue"
import Home from "@/components/Home.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:catchAll(.*)',
            name: '404',
            meta: {
                title: '404',

            },
            component: Error,

        },
        {
            path: '/',
            name: 'Home',
            meta: {
                title: 'home',
            },
            component: Home,

        },
        {
            path: '/config',
            name: 'Config',
            meta: {
                title: 'VocalSense',
            },
            component: Config,

        },
    ],
    transition: {
        name: 'fade',
        mode: 'out-in',
    },
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});




export default router