<template>
    <div>
      <app-header></app-header>
      <div class="container">
         <router-view></router-view>
      </div>
       

    </div>
</template>

<script>
  import Header from './components/Header.vue'
  
    export default {
      components: {
        'app-header': Header
      },
      created(){
        this.$store.dispatch('initProducts');
      }

    }
</script>
  
<style>
  /* body {
      padding: 30px
    } */
</style>
