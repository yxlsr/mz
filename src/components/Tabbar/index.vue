<template>
  <div class="tabbar">
     <TabItem txt="电影" mark="home" :sel="selected" :changeSelected=" changeSelected"> 
       <!-- <span slot="normalImg" src="" alt="">
        <img slot="activeImg" src="" alt=""> -->
        <div id="c" class="iconfont " slot="normalImg">&#xe504;</div>
        <div id="c1" class="iconfont" slot="activeImg">&#xe504;</div>
     </TabItem>
     <TabItem txt="影院" mark="movie" :sel="selected" :changeSelected=" changeSelected">
        <div id="c" class="iconfont " slot="normalImg">&#xe501;</div>
        <div width="180px" id="c1" class="iconfont" slot="activeImg">&#xe501;</div>
     </TabItem>
     <TabItem txt="咨询" mark="consult" :sel="selected" :changeSelected=" changeSelected">
        <div id="c" class="iconfont " slot="normalImg">&#xe62b;</div>
        <div id="c1" class="iconfont" slot="activeImg">&#xe62b;</div>
     </TabItem>
     <TabItem txt="我的" mark="mine" :sel="selected" :changeSelected=" changeSelected">
        <div id="c" class="iconfont " slot="normalImg">&#xe503;</div>
        <div id="c1" class="iconfont" slot="activeImg">&#xe503;</div>
     </TabItem>
  </div>
</template>

<script>
import TabItem from "./TabItem"
export default {
  data(){
    return{
       selected:"home"
    }
  },
  methods:{
    changeSelected(sel){
      this.selected=sel
    }
  },
  components:{
    TabItem
  }
}
</script>

<style lang="scss">
.tabbar{

  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  
}

#c{
   font-size:25px;
}
#c1{
  color:orange;
  
  font-size:25px;

}
 .tabitem{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
 }
</style>