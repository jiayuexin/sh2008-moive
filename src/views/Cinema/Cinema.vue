<template>
    <div>
        <h1>电影院</h1>
    </div>
</template>

<script>
    import { CinemaPagelistData } from "@/api/api"
    export default {
        data:function(){
            return {
                dahei:[],
                }
        },
      async mounted(){
         let res = await CinemaPagelistData()
         this.dahei = res.data.data.films
         console.log(res);
      },
    }
</script>