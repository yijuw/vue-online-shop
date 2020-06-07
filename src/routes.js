import Home from './components/Home.vue';
import Cart from './components/cart/Cart.vue';
import Products from './components/products/Products.vue';

export const routes = [
    {path:'/',  component: Home, props: true},
    {path:'/cart', component: Cart, props: true},
    {path: '/products',component: Products, props: true},
]