<template>
  <div id="app">
    <FooterNav v-if="is_show"></FooterNav>   
    <!-- 使用组件  单双标签都可以使用-->
    <router-view/>
  </div>
</template>

<script>
// 导入组件
import FooterNav from '@/components/FooterNav'   // 导入字体图标
export default{
  data(){
    return {
      is_show:true
    }
  },
  components: {
    FooterNav,
  },
  created(){
    this.eventBus.$on('footernav' , (flag)=>{
      this.is_show = flag
    })
  }
}
</script>

<style lang="scss">
  *{
  margin: 0;
  padding: 0;
  }
  html,body{
    width: 100%;
    touch-action: none;    // 禁止移动端用户自己缩放
  }
  ul,li{
    list-style: none;
  }
</style>
