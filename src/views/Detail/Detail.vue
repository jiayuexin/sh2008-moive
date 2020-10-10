<template>
    <div class="detail">
        <div class="img">
            <img :src="film.poster" alt="">
        </div>
        <div class="d film-detail">
            <!-- 电影名称 -->
            <div class="box">
                <div class="film-name">
                    {{ film.name }}
                    <span class="item">{{ film.filmType.name }}</span>
                </div>
                <div v-if="min" class="film-grade">
                    <span class="grade">{{ film.grade }}分</span>
                </div>
                
            </div>
                 <!-- 剧情 -->
            <div>{{film.category}}</div>
            <!-- 上映时间-->
            <div class="film-detail-all">{{film.premiereAt | parsePremiereAt}} 上映</div>
            <!-- 上映国家    电影时长 -->
            <div class="film-detail-all">{{film.nation}} | {{film.runtime}} 分钟</div>
            <!-- 电影详情 -->
            <div class="short film-detail-all" :class="{cactive:bool}">{{film.synopsis}}</div>
            <div @click="toggle()" :class="{active:isActive}" ><img class="dian" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg==" alt=""></div>
        </div>
    </div>
</template>

<script>
import {detailData} from '@/api/api'
import moment from 'moment'
export default{
    data(){
        return {
            film:{},
            isActive:false,
            min:false,
            bool:true
        }
    },
    async mounted(){
        let res = await detailData(this.$route.params.filmId)
        this.film = res.data.data.film
        if(res.data.data.film.grade){
            this.min = true
        }
    },
    filters:{
        parsePremiereAt:(value)=>{
            return moment(value * 1000).format('YYYY-MM-DD')
        }
    },
    methods:{
        toggle:function(){
            this.bool = !this.bool
            this.isActive = !this.isActive
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    .img {
        width: 100%;
        height: 236px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .film-detail {
        padding: 0 15px;
        background-color: #fff;
        .active {
            transition:0.5s ;
            transform: rotate(180deg);
        }
        .cactive{
            height: 20px;
            overflow: hidden;
        }
        
        .dian{
            display: block;
            margin: 10px auto;
            
        }
        .box {
            display: flex;
            justify-content: space-between;

            .film-name {
                color: #191a1b;
                font-size: 18px;
                height: 24px;
                line-height: 24px;
                margin-right: 7px;
                margin-top: 10px;
                line-height: 24px;

                .item {
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                    display: inline-block;
                }
            }
            .film-grade {
                width: calc(100% - 250px);
                text-align: right;
                color: #ffb232;
                margin-top: 10px;

                .grade {
                    font-size: 18px;
                    font-style: italic;
                }
                .grade-text {
                    font-size: 10px;
                }
            }
        }
        .film-detail-all {
            font-size: 13px;
            color: #797d82;
            margin-top: 4px;
        }
        .film-detail-all:nth-of-type(5) {
            margin-top: 13px;
        }
    }
}
</style>
