<template>
    <div>
        <button @click="handel2()">点我+++</button>
    </div>
</template>

<script>
import {mapState , mapMutations} from 'vuex' 
export default {
    
    mounted(){
        // 1，state直接获取对应的数据值
        console.log(this.$store.state.count);
    },
    computed:{
        ...mapState(['count','city'])
    },
    methods:{
        ...mapMutations(['add']),
        handel1:function(){
            this.$store.commit('add', 12)
        },
        handel2:function(){
            this.add(13)
        }
    }
}
</script>