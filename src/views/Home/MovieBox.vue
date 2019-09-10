<template>
  <div class="moviebox"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"    
  >
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></MovieItem>
  </div>
</template>

<script>
import MovieItem from "./MovieItem"
export default {
    methods:{
        loadMore(){
            if(!this.hasMore){
                this.loading=true;
                return false
            }
          this. getMovies();
        },
        getMovies(){
            let {page,limit} = this;
            this.loading= true;
           this.$http.get("/api/mz/home/list",{
               params:{
                   page,
                   limit
               }
           }).then(res=>{
        this.movies=this.movies.concat(res.data.data.object_list)
     
        this.loading = false;
        if(this.page*this.limit>=res.data.data.total){
           this.hasMore=false
           return false
        }
           this.page++
    })
    },
    },
    components:{
        MovieItem
    },
    data(){
        return{
            movies:[],
            loading:false,
            page:1,
            limit:6,
            hasMore:true
            
        }
    },
    
    created(){
      
    },
}
</script>

<style>

</style>