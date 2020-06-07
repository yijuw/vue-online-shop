<template>
    <div>
        <app-product v-for="product in products" :key="product.id" :product="product"></app-product>
        <div class="total">
            <h4>Total: {{ total | currency}}</h4>
        </div>
        <button class="btn btn-danger float-right mx-5" type="button" @click="clear">
            Clear Cart 
        </button>
        <b-button class="btn btn-success mx-5" type="button" v-b-modal.modal-1 @click="checkout">
            Checkout 
        </b-button>
          <b-modal  id="modal-1" title="CHECKOUT" ok-only>
            <div class="d-block text-center">
                <h4>Thank you!</h4>
                <h4>YOUR ORDER HAS BEEN PLACED</h4>
            </div>
        </b-modal>
    </div>
</template>
<script>

import {mapGetters} from 'vuex';
import Product from './Product.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'


 export default {
    computed: {
        ...mapGetters({
            products:'cartItems'
        }),
        total() {
            return this.$store.getters.total;
        }
    },
    components: {
        'app-product': Product,
    },
    methods: {
        clear() {
            this.$store.dispatch('clearCart');
        },
        checkout() {
            const data = {
                total: this.$store.getters.total,
                cartItems: this.$store.getters.cartItems,
                products: this.$store.getters.products

            };
            this.$http.post('data.json',data)
        }
    }
}
</script>
<style scoped>
.total {
    text-align: center;
    margin: 30px;
}
</style>