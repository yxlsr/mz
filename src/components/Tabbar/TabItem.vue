<template>
  <div class="tabitem" @click="change">
      <div class="box">
         <div v-if="!flag"> <slot name="normalImg"></slot></div>
         <div v-else> <slot name="activeImg" ></slot></div>
          
      </div>
      <span :class="{active:flag}">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props:["txt","mark","sel","changeSelected"],
    methods:{
        change(){
            this.changeSelected(this.mark)

            this.$router.push("/"+this.mark)
                }
    },
    computed:{
        flag(){
            if(this.mark===this.sel){
                return true
            }
            return false
        }
    }
}
</script>

<style>
.tabitem{
    flex: 1;
    margin-top: 2px;
}

span{
    font-size: 10px;
     margin-top: 5px;
    
}
.active{
        color:orange;
    }
    .box{
        margin-top:1.5px;
    }
</style>