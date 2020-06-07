<template>
    <div class="col-sm-6 col-md-4">
        <div class="card my-2">
            <div class="card-body">
                <h4 class="card-title text-center">
                    {{ product.name }}
                </h4>
                <img class="card-img-top" :src="product.image">
                <div class="card-text">
                    <h5>Price: {{ product.price | currency }}</h5>
                </div>

     <div class="input-group">
                <select class="custom-select" v-model="quantity">
                    <option v-for="quantityOption in  quantityOptions" :key="quantityOption">{{ quantityOption }}</option>
                </select>
                <div class="input-group-append">
                    <button 
                        class="btn btn-success"
                        type="button"
                        @click="addProduct"
                    >
                    Add to Cart
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['product'],
    data() {
        return {
            quantity: 1,
            quantityOptions: [1, 2, 3, 4, 5],

        }
    },
    methods: {
        addProduct() {
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };
            console.log(order);
            this.$store.dispatch('addProduct', order);
            this.quantity = 1

        }
    }
}
</script>
<style scoped>
.card-text {
    text-align: center;
    margin: 10px;
}
</style>
