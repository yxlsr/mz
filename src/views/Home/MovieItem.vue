<template>
  <div class="movieitem">
      <div class="img-box">
          <div class="info">
              <div class="info-left">
                  <img v-lazy="movie.poster" alt="">
              </div>
              <div class="info-right">
                 <div class="name"> <div class="nome" >{{movie.name}}</div> <div class="nnme">{{movie.item.name}}</div></div> 
                  <div :class="this.movie.grade?'':'opacticy1'" >观众评分: <span class="grade" >{{movie.grade}}</span></div>
                    <div class="actors">主演：{{movie.actors[0].name}}</div>
                    <div class="runtime">{{movie.nation}}|{{movie.runtime}}分钟</div>
              </div>
              
              <mt-button class="mint-button mint-button--danger mint-button--large is-plain" >购票</mt-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.movie.grade)
    },
    data(){
        return{
            isshow:true
        }
    },
props:{
    movie:Object
}
}
</script>

<style lang="scss">
.info{
    display: flex;
    margin: 10px;
    .info-left{
        img{
            width: 66px;
            height: 90px;
        }
    }
    .info-right{
        display: flex;
        flex-direction:column;
        width:180px;
        height: 90px;
        padding: 0,10px;
        flex: 1;
        margin-left: 10px;
        .name{
            width:160px;
                font-size: 16px;
               
                color: black;
                    height: 20px;
                  
                    // margin-: 5px;
                      
    .nome{
           width: 129px;
           height: 20px;
          overflow: hidden;  
            white-space: nowrap;
            text-overflow: ellipsis;
            float: left;
            line-height: 20px;
    }
    .nnme{
        height: 20px;
        width: 16px;
        float: left;
        font-size: 9px;
        background: #d2d6dc;
        color: #fff;
      
        line-height: 20px;
        
    }
    
        }
        .actors .runtime{
                font-size: 13px;
    margin-top: 4px;
    color: #797d82;
        }
    }
}
.mint-button--large {
    display: block;
    width: 50px;
    height: 25px;
    font-size: 12px;
}
.grade {
    color: #ffb232;
    font-size: 14px;
}
.opacticy1{
    opacity: 0;
}
</style>