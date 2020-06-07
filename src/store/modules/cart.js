const state = {
    total: 0,
    products:[]
};

const mutations = {
    'ADD_PRODUCT'(state, { productId, productPrice, quantity}) {
        const record = state.products.find(element => element.id == productId);
        if(record) {
            record.quantity += quantity
        } else {
            state.products.push({
                id: productId,
                quantity: quantity
            })

        }
        state.total += productPrice * quantity;
    },

    'EDIT_QUANTITY'(state, { productId, productPrice, quantity}) {
        const record = state.products.find(element => productId == element.id);
        state.total -= productPrice * record.quantity
        record.quantity = quantity;
        state.total += quantity * productPrice
    },
    'REMOVE_PRODUCT'(state, { productId, productPrice, quantity}){
        const record = state.products.find(element => productId == element.id);
        state.products.splice(state.products.indexOf(record), 1);
        state.total -= productPrice * quantity;
    },
    'CLEAR_CART' (state) {
        state.products.splice(state.products.length * (-1));
        state.total = 0;
    }
};

const actions = {
    editQuantity({commit}, order) {
        commit('EDIT_QUANTITY',order)
    },
    removeProduct({commit}, order){
        commit('REMOVE_PRODUCT', order)
    },
    clearCart({commit}) {
        commit('CLEAR_CART')
    }
};

const getters = {
    cartItems ( state, getters ) {
        return state.products.map(product => {
            const record = getters.products.find(element => element.id == product.id);
            return {
                id: product.id,
                quantity: product.quantity,
                name: record.name,
                price: record.price,
                image: record.image
            }
        })
    },
    total(state) {
        return state.total;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}