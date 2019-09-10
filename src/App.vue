<template>
  <div id="app">
    <div id="nav">
     
     <router-view></router-view>
     <Tabbar></Tabbar>
    </div>
    
  </div>
</template>

<style lang="scss">

</style>
<script>
import Tabbar from "@/components/Tabbar"
export default {
  components:{
    Tabbar
  }
}
</script>