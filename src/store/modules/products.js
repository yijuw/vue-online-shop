import products from '../../data/products.js';

const state = {
    products: []
};
const mutations = {
    'SET_PRODUCTS'(state, products) {
        state.products = products
    }
};

const actions = {
    addProduct({commit}, order) {
        commit('ADD_PRODUCT', order);
    },
    initProducts({commit}){
        commit('SET_PRODUCTS', products);
    }
};

const getters = {
    products(state) {
        return state.products;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}