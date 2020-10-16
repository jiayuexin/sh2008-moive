<template>
    <div>
        <FilmList :list="dahei" :key="'film' + dahei.length" :type="type"></FilmList>
    </div>
</template>


<script>
    import { nowPlayingListData } from "@/api/api"
    import FilmList from '@/components/FilmList'
    export default {
        data:function(){
            return {
                dahei:[],
                page:1,
                type:1    //当前传递的数据为正在热映的电影数据
                }
        },
      async mounted(){
         let res = await nowPlayingListData(this.page)
         this.dahei = res.data.data.films
      },
      components:{
        FilmList
      }
    }
</script>