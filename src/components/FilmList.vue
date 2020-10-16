<template>
    <div class="list scroll" :style="{height:height +'px'}">
        <Loading v-if="loading"></Loading>
        <div>
            <div class="item" v-for="(item,index) in data" @click="goDetail(item.filmId)" :key="index">
            <div class="left">
                <img v-lazy="item.poster" alt="">
            </div>
            <div class="middle">
                <div>{{item.name}}</div>
                <div v-if="type == 1">
                    <span>观众评分</span>
                    <span class="grade" v-if="fen">{{item.grade}}分</span>
                </div>
                <div class="d">主演: {{item.actors | parseAcyors}}</div>
                <div v-if="type == 1">{{item.nation}} | {{item.runtime}} 分钟</div>
                <div v-else class="d">上映日期： {{item.premiereAt | parsePremiereAt}}</div>
            </div>
            <div class="right">
                <span v-if="type == 1">购票</span>
                <span v-else>预购</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Loading from './loading'
import moment from 'moment'
moment.locale('zh-cn');
import BScroll from 'better-scroll'
import {nowPlayingListData,comingSoonListData} from "@/api/api"
export default {
    data(){
        return {
            loading:true, 
            height:0,
            // 用于保存实例
            bs:null,
            pageNum:1,
            bool:true,     // 控制是否还要加载更多
            data:[],         // 拼接数据用
            fen:true
        }
    },
    props:['list' , 'type'],
    created(){

        this.data = this.list
        // 判断数据是否获取到，获取到数据后去除Loading组件
        if(this.data.length > 0){
            this.loading = false
        }
        if(this.data.grade){
            this.fen = true
        }else{
            this.fen = false
        }
    },
    components:{
        Loading
    },
    filters:{
        // 处理演员的数据，将主演的数据从数据中形式转化成字符串形式化便以输出
        parseAcyors:function(value){
            let actors = '';
            if(value){
                value.forEach((ele)=>{
                actors += ele.name + ' '
            });
            }else{
                actors = '暂无评分'
            }
            return actors;
        },
        
        parsePremiereAt:(value)=>{
            return moment(value * 1000).format('ddd YYYY-MM-DD')
        }
    
    },
    methods:{
        goDetail:function(filmId,type){
            this.$router.push({name:"detail",params:{filmId}})
        },
        getData: async function(){
            if(this.bool){
                this.pageNum++
            // 获取数据
            if(this.type == 1){
                // 正在热映
                var ret = await nowPlayingListData(this.pageNum)
            }else{
                //  即将上映
                var ret = await comingSoonListData(this.pageNum)
            }

            // 如果当前请求到的数据数量少于10则说明后面已经没有数据可以请求了。此时需要把开关设置成false
            if(ret.data.data.films.length < 10){
                this.bool = false
            }
            // 将数据处理好新增到列表中
            this.data = this.data.concat(ret.data.data.films)
            }
        }
    },
    mounted(){
        // 获取高度
        this.height = document.documentElement.clientHeight - 110

        
        
    },
    updated(){
        this.bs = new BScroll('.scroll' , {
            pullUpLoad: true,
            pullDownRefresh: true,
            click: true
        });

        // 监听事件
        this.bs.on('pullingUp',()=>{
            // console.log('上');
            // 获取数据
            this.getData()
            this.bs.finishPullUp()
        })
        this.bs.on('pullingDown',()=>{
            // console.log('下');
            // 获取数据
            this.getData()
            this.bs.finishPullDown()
        })
    }
}
</script>

<style lang="scss" scoped>
.scroll{
    overflow: hidden;
}
.list{
    margin-bottom: 50px;
   .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
        width: 77px;
        height: 100px;
        margin-left: 20px;
        img {
            width: 66px;
            height: 100%;
        }
    }

    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;

        div:nth-of-type(1) {
            color: #191a1b;
            font-size: 16px;
        }

        .d{

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .right {
        width: 15%;
        display: flex;
        align-items: center;
        margin-right: 20px;

        span {
            border: 1px solid #ff5f16;
            background: white;
            color: #ff5f16;
            border-radius: 2px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            width: 50px;
            text-align: center;
        }
    }
}
}
</style>