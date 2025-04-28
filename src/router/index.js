import { createRouter, createWebHistory } from 'vue-router'

// Lazy load views
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Master.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/pages/Index.vue'),
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/pages/About.vue'),
            },
            {
                path: 'contact',
                name: 'ContactUs',
                component: () => import('@/pages/ContactUs.vue'),
            },
            {
                path: 'product',
                name: 'Product',
                component: () => import('@/pages/Product.vue'),
            },
            {
                path: '/product/:id',
                name: 'ProductDetails',
                component: () => import('@/pages/ProductsDetails.vue'),
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('@/pages/Cart.vue'),
            },
            {
                path: 'checkout',
                name: 'Checkout',
                component: () => import('@/pages/Checkout.vue'),
            },
            {
                path: 'checkout2',
                name: 'Checkout2',
                component: () => import('@/pages/Checkout2.vue'),
            },
            {
                path: 'checkout3',
                name: 'Checkout3',
                component: () => import('@/pages/Checkout3.vue'),
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
