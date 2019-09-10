<template>
  <div class="home" >
       <Banner></Banner>
       <div class="navbar">
         <span
           v-for="nav in navs"
          :key="nav.id"
           :class="{active:type===nav.url}"
           @click="type=nav.url"
         >{{nav.title}}</span>
         
       </div>
       <MovieBox></MovieBox>
  </div>
    
</template>

<script>
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
export default {
  data(){
    return{
      type:"in_theaters",
      navs:[
        {id:1,title:"正在热映",url:"list"},
        {id:2,title:"即将上映",url:"coming"}
      ]
    }
  },
components:{
        
        Banner,
        MovieBox
       
    }
}
</script>

<style lang="scss"> 
  .navbar{
     position: relative;
            height:50px;
            background: #fff;
            display: flex;
            justify-content: space-around;
           
            align-items: center;
            z-index:10;
             &.posTop{
                position: fixed;
                left:0;
                top:0;
                width:100%;
                margin-top:0;
                z-index:20;
            }
            span{
                position: relative;
                &::after{
                    content:"";
                    width:40px;
                    height:3px;
                    background: transparent;
                    position: absolute;
                    left:50%;
                    margin-left:-20px;
                    bottom:-10px;
                }
            }
            .active{
                color:orange;
                transition:all 1s linear;
                &::after{
                    content: "";
                    background:orange;
                    transition:all 1s linear;
                }
            }
  }
</style>