<template>
    <div>
        <FilmList :list="dahei" :key="'film' + dahei.length" :type="type"></FilmList>
    </div>
</template>


<script>
    import { comingSoonListData } from "@/api/api"
    import FilmList from '@/components/FilmList'
    export default {
        data:function(){
            return {
                dahei:[],
                page:1,
                type:2
                }
        },
      async mounted(){
         let res = await comingSoonListData(this.page)
         this.dahei = res.data.data.films
      },
      components:{
          FilmList
      }
    }
</script>