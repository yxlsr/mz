<template>
 <div class="home-banner swiper-container">
  <div class="swiper-wrapper">
       <!-- <div  class="swiper-slide" >
              <img width="100%" src="../../assets/111.jpg" alt="">
        </div>
         <div  class="swiper-slide" >
              <img width="100%" src="../../assets/222.jpg" alt="">
        </div> -->
        <div  class="swiper-slide"
            v-for="banner in banners"
            :key=banner.id
         >
            <img :src="banner.imgUrl " alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"

export default {
    data(){
        return{
            banners:[]
        }
    },
created(){
    this.$http.get("/api/mz/banner",{
        params:{
            limit:2
        }
    }).then(res=>{
        this.banners=res.data.data.object_list
        console.log(res.data.data.object_list)
        // console.log(res)
        this.$nextTick(()=>{
                        new Swiper(".home-banner",{  
                            autoplay:true,
                            loop:true,
                            pagination:{
                        el:".swiper-pagination"
                    }
                           
                        })
                    })
    })
   
  
}
}
</script>

<style lang="scss">
  .swiper-pagination{
          left: auto;
            width: auto;
            left: 140px;
            
            .swiper-pagination-bullet-active {
                background: #ffff;
                
            }
        }
        
     .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
            border: 1px solid #ffff;
              left: 140px;
             position: relative;
     }   
     .home-banner{
          width:100%;
        height:190px;
        img{
             width: 100%;
         height: 100%;
        }
     }
</style>