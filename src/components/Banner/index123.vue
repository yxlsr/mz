<template>
  <div class="">
      <mt-swipe :auto="4000">
  <mt-swipe-item class="x"> <img width="100%" src="../../assets/111.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item class="x"><img width="100%" src="../../assets/222.jpg" alt=""></mt-swipe-item>
  
</mt-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mint-swipe-items-wrap,.mint-swipe{
  overflow:visible;
}
 /* .x{
   width: 100%;
   height: 200px!important;
   background:cyan!important;
   z-index: 10;
 }
 img{
  
 } */
</style>