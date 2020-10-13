<template>
    <div>
        <div class="film-header"><div class="goBack" @click="golist()"
        ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
            </div> <div class="title">{{film.name}}</div> <!----></div>
        <div class="detail">
        <div class="img">
            <img v-lazy="film.poster" alt="">
        </div>
        <div class="d film-detail">
            <!-- 电影名称 -->
            <div class="box">
                <div class="film-name">
                    {{ film.name }}
                    <span class="item">{{ film.filmType.name }}</span>
                </div>
                <div v-if="film.grade" class="film-grade">
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
        <div class="c">
            <div class="actors-title-bar"><span class="actors-title-text">演职人员</span></div>
            <Swiper class="swi" :key="'actors' + film.actors.length">
<!-- 循环输出图片信息 -->
                <div  class="swiper-slide" v-for="(item,index) in film.actors" :key="index">
                    <div><img v-lazy="item.avatarAddress" alt=""></div>
                    <div>
                        <span class="actors-name">{{item.name}}</span>
                        <span class="actors-role">{{item.role}}</span>
                    </div>
                </div>
            </Swiper>
        </div>
        <div>
            <div class="photos">
                <div class="photos-title-bar">
                    <span class="photos-title-text">剧照</span> 
                    <span class="photos-to-all">全部(5)</span>
                </div>
                <div>
                  <ul style="margin-left:15px">
                      <Swiper :key="'photos' + film.photos.length">
                          <li v-for="(items,indexs) in film.photos" :key="indexs" class="row-scroll-item photos-item-wrap" style="width: 150px; min-width: 150px;">
                              <div class="lazy-img">
                                 <div class="lazy-img-wrap" style="width: 150px; height: 100px; background: rgb(249, 249, 249); opacity: 1; display: block;"><img :src="items" class="target-img"></div>
                             </div>
                          </li>
                      </Swiper>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {detailData} from '@/api/api'
import moment from 'moment'
moment.locale('zh-cn');
import Swiper from '@/components/Swiper'
export default{
    data(){
        return {
            film:{actors:[]},
            isActive:false,
            bool:true
        }
    },
    async mounted(){
        let res = await detailData(this.$route.params.filmId)
        this.film = res.data.data.film
        // console.log(this.film);
        
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
        },
        golist:function(){
            this.$router.go(-1)
        }
    },
    components:{
        Swiper
    },
    created(){
        // 发起通知，通知app.vue组件一处底部菜单
        this.eventBus.$emit('footernav' , false)
    },
    beforeDestroy(){
        // 发起通知，通知app.vue组件回复底部菜单
        this.eventBus.$emit('footernav' , true)
    }
}
</script>

<style lang="scss" scoped>
.film-header {
    position: fixed;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
    .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
    img {
    width: 30px;
}
}
    .film .film-header .title {
    font-size: 17px;
    line-height: 44px;
    width: 100vw;
    text-align: center;
}
}
.detail {
    .img {
        width: 100% ;
        height: 236px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .c{
        border-top: 10px solid #ccc;
        border-bottom: 10px solid #ccc;
    .actors-title-bar {
    padding: 15px;
        .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        }
    }
    }
    .swi{
        padding-left: 15px;
        
    .swiper-slide {
    //    width: 85px !important; 
        position: relative;
        height: 160px;
        display: block;
        top: 50%;    
    img {
       width: 80px !important; 
       height: 100px;
    }
    .actors-name {
    padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 25px;
    }
    .actors-role {
    font-size: 10px;
    margin-left: 25px;
    color: #797d82;
    }
    }}
    .film-detail {
        padding: 0 15px;
        background-color: #fff;
        .active {
            transition:0.3s;
            transform: rotate(180deg);
        }
        .cactive{   
            transition:0.3s ;
            height: 50px;
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
.photos {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    .photos-title-bar {
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    span {
    display: inline-block;
    height: 22.5px;
    line-height: 22px;
    .photos-to-all {
    font-size: 13px;
    color: #797d82;
    float: right;
}
 
}
}

.row-scroll-item{
    position: relative;
    margin-right: 10px;
    .lazy-img{
    position: relative;
    .lazy-img-wrap{
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    .target-img{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
}
}
}
}
}

</style>
