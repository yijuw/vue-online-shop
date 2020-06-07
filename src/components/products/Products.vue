<template>
    <div class="row">
        <app-product v-for="product in products" :product="product" :key="product.id" ></app-product>
    </div>
</template>
<script>
import Product from './Product.vue';
export default {
    components: {
        'app-product': Product
    },
    computed: {
      products() {
        return this.$store.getters.products;
      }
    }
}
</script>
<style>

</style>