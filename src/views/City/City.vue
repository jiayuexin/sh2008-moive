<template>
    <div class="box">
        <div class="header">
            <div class="left">
                <van-icon class="icon" name="cross" @click="chooseCity()" />
            </div>
            <div class="title">当前城市 - {{cityOld}}</div>
        </div>
        <div class="search-city-input">
            <div class="input-wrap">
                <van-icon name="search" class="search-icon" />
                <input
                    type="text"
                    placeholder="输入城市名或拼音"
                    class="search-input"
                />
            </div>
        </div>

    <van-index-bar
            :index-list="indexList"
            style="margin-top:93px"
            class="list"
        >
           <div class="scroll" :style="{height:height + 'px'}">
               <div>
                    <div class="recommend-city">
                <div class="gprs-city">
                    <div class="city-index-title">GPS定位你所在城市</div>
                    <ul class="city-index-detail cleanfix">
                        <li class="city-item-detail city-item-detail-gprs">
                            <div class="city-item-text">{{addr}}</div>
                        </li>
                    </ul>
                </div>
                <div class="hot-city">
                    <div class="city-index-title">热门城市</div>
                    <ul class="city-index-detail cleanfix">
                        <li class="city-item-detail">
                            <div class="city-item-text">北京</div>
                        </li>
                        <li class="city-item-detail">
                            <div class="city-item-text">上海</div>
                        </li>
                        <li class="city-item-detail">
                            <div class="city-item-text">广州</div>
                        </li>
                        <li class="city-item-detail">
                            <div class="city-item-text">深圳</div>
                        </li>
                    </ul>
                </div>
            </div>
                    <template v-for="(item, index) in dataList">
                        <van-index-anchor
                            style="background:#F4F4F4"
                            :index="item.index"
                            :key="index"
                        />
                        <van-cell
                            v-for="(v, k) in item.data"
                            :title="v.name"
                            :key="k"
                            @click="chooseCity(v.name)"
                        />
                    </template>
               </div>
           </div>
                </van-index-bar>
    </div>
</template>



<script>
import {cityListData} from '@/api/api'
import Vue from "vue";
import "vant/lib/index.css"
import { IndexBar, IndexAnchor, Cell,Icon } from "vant";
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Icon);

export default {
    data(){
        return {
            dataList:[],
            indexList:[],
            height:0,
            bs:null
        }
    },
    
    // 进入的时候去除底部的导航
    created(){
        this.eventBus.$emit('footernav' , false)
    },

    // 出来的时候显示底部导航
    beforeDestroy(){
        this.eventBus.$emit('footernav' , true)
        
    },
    mounted(){
        console.log(this.$route.parmas);
    },
    async mounted(){
        let ret = await cityListData()
        this.dataList = ret[0]
        this.indexList = ret[1]
        this.height = document.documentElement.clientHeight -93

    },
    methods:{
        chooseCity:function(cityName){
            // 将数据写到vuex中
            this.$store.commit('setCity' , cityName)
            // 编程式导航
            this.$router.go(-1)
        },
        
    },
    updated(){
        this.bs = new BScroll('.scroll' , {
            
            click: true
		});
	
    },
    computed:{
        ...mapState(['addr','cityOld','city'])
    },
    
    
}
</script>

<style lang="scss" scoped>
.box {
    .scroll{
        overflow: hidden;
    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: flex;
        z-index: 999;
        background-color: #fff;

        .left {
            width: 14%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .city-list .header i {
                display: block;
                font-size: 23px;
            }

            .icon {
                font-size: 22px;
                margin-left: 20px;
                color: #929293;
            }
        }
        .title {
            width: 72%;
            text-align: center;
            font-size: 17px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #191a1b;
        }
        ::after {
            content: ' ';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-bottom: 1px solid #ededed;
            color: #ededed;
            transform-origin: 0 100%;
            transform: scaleY(0.5);
        }
    }
    .search-city-input {
        z-index: 2000;
        width: 100vw;
        padding: 9.5px 15px;
        background-color: #f4f4f4;
        position: fixed;
        top: 44px;
        height: 30px;

        ::placeholder {
            font-size: 11px;
            color: #bdc0c5;
        }

        .input-wrap {
            background-color: #fff;
            position: relative;
            display: inline-block;
            border-radius: 3px;
            width: 93%;
            height: 30px;

            .search-icon {
                position: absolute;
                left: 7px;
                top: 0;
                line-height: 30px;
                font-size: 16px;
                color: #797d82;
            }
            .search-input {
                position: absolute;
                left: 33.5px;
                top: 0;
                height: 30px;
                width: calc(100% - 65px);
                border: 0;
            }
        }
    }
    .list {
        .recommend-city {
            background-color: #fff;
            padding-left: 15px;
            padding-top: 15px;

            .city-index-title {
                font-size: 13px;
                color: #797d82;
                margin-bottom: 10px;
            }
            .city-index-detail {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: flex-start;
                align-content: center;
                flex-wrap: wrap;

                .city-item-detail {
                    width: calc((100vw - 33px) / 3);
                    text-align: center;
                    padding-bottom: 15px;
                    box-sizing: border-box;
                    float: left;

                    .city-item-text {
                        height: 30px;
                        background-color: #f4f4f4;
                        line-height: 30px;
                        border-radius: 3px;
                        box-sizing: border-box;
                        margin: 0 7.5px;
                        font-size: 14px;
                        color: #191a1b;
                    }
                }
            }
        }
    }
}
</style>
