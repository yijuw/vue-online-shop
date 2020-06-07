<template>
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand">Online Shop</router-link>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/products" tag="li" activeClass="active"><a class="nav-link">Products</a></router-link>
        <router-link class="nav-item" to="/cart" tag="li" activeClass="active"><a class="nav-link">Cart ({{items}}) </a></router-link>
    </ul>
  </div>
</nav>

</template>
<script>
    export default {
        computed: {
            items() {
                return this.$store.getters.cartItems.length;
            }
        }
    }
</script>

