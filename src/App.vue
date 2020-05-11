<template>
  <div id="app">
    
    <compHeader/>

    <router-view/>

    <compFooter/>
    
  </div>
</template>

<script>
import compHeader from './components/Header-Footer/Header.vue'
import compFooter from './components/Header-Footer/Footer.vue'

export default {

  components:{
    compHeader,
    compFooter
  },
  created(){
    this.$store.dispatch('admin/refreshToken')
  }

}

</script>

<style>
  @import './assets/style.css'
</style>
