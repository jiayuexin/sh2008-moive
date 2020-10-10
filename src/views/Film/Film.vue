<template>
    <div>
        <FilmListTopNav :class="fixed ? 'fixed' : ''"></FilmListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav'
export default{
    data(){
        return {
            fixed:false
        }
    },
    components:{
        FilmListTopNav
    },
    mounted(){
        window.addEventListener("scroll",(e)=>{
            let top = document.documentElement.scrollTop
            if(top >130){
                this.fixed = true
            }else{
                this.fixed = false
            }
        },true)
    }
}
</script>

<style lang="scss" scoped>
    .fixed {
    position: fixed;
    top: 0;
    background: #ffffff;
}
</style>