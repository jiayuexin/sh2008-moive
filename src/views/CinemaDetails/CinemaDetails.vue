<template>
    <div>
        <div class="main">
            <div class="cinema-schedule" data-enter-time="1603093560">
                <div class="header-left">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg=="
                        width="11px"
                        height="18px"
                        style=""
                        @click="back"
                    />
                </div>
                <div class="header-title">
                    {{ cinemaPic.name }}
                </div>
                <div class="cinema-wrap" style="">
                    <div class="cinema-info" style="">
                        <div class="tags">
                            <div
                                class="tag"
                                v-for="(item, index) in detailTop"
                                :key="index"
                            >
                                {{ item.name }}
                            </div>

                            <i
                                class="tag-more iconfont icon-quanju_liebiaojiantou"
                                style="font-size: 10px;"
                            ></i>
                        </div>
                        <div class="address">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA+CAMAAABqWnnkAAACalBMVEVHcEyZmZl/f4p/f79/f4t5fYJ5foN5fYJ/f/95fYJ/f415fYKNjY2Li4uHh4d5fYN/f6p5fYJ5fYJ6foJ5foJ6foJ6fYR7foP///96fYN5fYJ5fYV7f4N5fYJ/f5l5fYJ5fYJ6f4R5fYJ5fYJ5fYN5fYJ5fYJ5fYJ/f4eJiYl5fYN6fYJ5fYJ7g4N7foN/f496fYKIiIh5fYJ5fYKGhoZ7f4N5foJ/f4eqqqp6fYR5fYJ5fYJ5fYORkZF5fYV5fYJ6f4J6foJ5fYJ5f4J5fYJ/f4h5foJ5fYJ6fYJ6fYN7f4N6fYR6f4R6fYJ5fYJ5f4V8goJ6fYJ5foJ5foJ5f4J5fYN5fYN6fYR6fYR5fYJ5fYN/f5F/f597g4N8goJ5fYJ5fYJ6foJ5fYN5fYJ7foN5fYJ5fYN5fYJ5foJ5f4J6foJ5fYJ5fYJ5f4J9fYZ5fYJ5hYV6foJ5foJ9fYJ5fYV8f4J5fYJ6fYN5fYJ5foJ8goJ6hIR5foJ7f4N/f4x6foJ5fYN5fYJ6fYJ6fYN8f4J6fYJ5foJ5fYN5fYJ/f5R6fYR5f4J5foJ6fYN5foJ5fYN5fYN5fYN5fYN5fYJ5f4V8goJ5fYN5fYJ5f4V8f4J6fYN5fYN8goJ5fYJ6fYJ/f4Z6fYR5f4J5fYN6fYN5fYV7foN5foJ5foJ5fYJ5hYV5fYJ6foJ7f4N7foN5fYJ6foJ5foN7g4N5foJ6fYR6f4R6eoR/f396f4J/f4Z/f4h5f4V8goJ5f4J5foJ6f4J7fYN9fYZ6fYJ6fYR7g4N5fYJ5fYJ6fYJ6foJ5foN5fYJ6foJ5fYN5fYJ5fYISY5pFAAAAzXRSTlMABRgEFuln/gLxEusJCxHOBvXhh43AS1kBrfo7Rt0KovA49vN8qPf8IA2xlPkjYRDqD+PZEzrIIgNP+8OfBz3fYIXlWM8csuzTozxsNmbFKi3oxrZW0IhoapnYDggdKe3ee6HyX81+77BUdeLkWjXmFcS0M0NK7qn9czEbcUQUfdTnnKVOlouz+AxwUG+nynqb0tbcKCWAxy5Mq3gv4NEmUVLajkFbrJfMF7d5SFegiWkhj1MwGwpeJB4sK1yVZHQ3mm4fv7mYwmvbg7W7mJkBagAAAz1JREFUGBmNwYNiIwsAhtG/bZJJatu2ja2xtm3b1rVt27bt751u2skkadQ9RwF+/aX/96kzpQV/VgyXZCu88atJ+Bn5vkShbRwuJdAbDQphbTNulROO/G8S47vmjf5xHbf69HgFGNiBW+enCfJy5hUZQKdNs9iWAI+uUoCTGcDgUvmxbQNuT1awtb1Q/JS8ovqgaqFCyndBQaIs66EqU2EsK4aVTpl2AfcprKcN2K4ZhUehXxE8AWXHNO1dSN2kCLJ3Q7rcYothSBGdhsqLkn6Ea0752/Le+69dlL/j8I+kPvhSPolpqUxLcsTIqwfGpCvn6E2U1/69WB5ZKkthJYxrCH6T1yUDiHunIqMScC2Q5V9w6Gc4L0uPAVsPd0tKGK6CuGp5/AVFOgGZ8khYDsejZTpihwl5nIL/lAQX5PEsuDbLci+wSKZv4ZquQ7Q8xmCxfCogXaZ2mFQuJMvUDqWF8jkFq2VyGhiyw9cyPQer5ScWtspkg2JNQZ5MHbBEfpKhXqaT8Lcq4AeZuiBVfhogVaYsmNAlOCtT1E54TD7rYKVMN6BcP8GkU6azcKe8mg6BQ6ZBuCynHY7INA8YkqUIJls04ysoG5BuwCfyyIHcPTGaduUZYKFM5ZAj6TQ0R8nU1AaMOS583FFuB+6XRxt8J6n7KPTIY3MSPkUDMpVAWYLcPoRaWQrTSjGNNMryJnygaS8anGuQ19sf7Uva1rljf7wsTWUwTzP2QZ0iOABvyZQHKbEKK+YgHJbHCihXWKNwMEYeL4E9QeHshgOyOF+B7QrjZdjZIi8H7E1USM4peFU+UQWQppCyICVafl6HlGiF0N0Ga+TP+QLUKYRGcMVqlkyor1aQqEHYowB9MF9B1kFcjQIsAKNEAVri4LyC5MAD2ZotHZ7fpCBdd0GjZnk8F0YVwhpYXiN/tfCkQrl7BO6Qn8tgLFJIWdC7TF7JG6BfYWTAimxZHgRXtMLYkguL5VGdAvcorDQ4Y5OpFh6OUVjxBXBTM24DI08R5AOZcqtphYcU0Xxo3SipDuyxiqi9GdZLHQZkaQ6rgPz4DXBCc8qBuAxwjWtOxw4xbZduwWetYFzVLXHaPv9Cwf4HsMulXDviYK8AAAAASUVORK5CYII="
                                width="14px"
                                height="21px"
                                alt=""
                            />
                            <div
                                class="address-des"
                                data-enter-time="1603093560"
                                data-click-fun="track_f_295997"
                            >
                                {{ cinemaPic.address }}
                            </div>
                            <a
                                href="tel:021-63594933"
                                class="tel-icon"
                                data-enter-time="1603093560"
                                data-click-fun="track_f_598194"
                                ><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC"
                                    width="17px"
                                    height="18px"
                                    alt=""
                            /></a>
                        </div>
                    </div>
                    <div class="schedule-wrap">
                        <div class="film-bg">
                            <div
                                class="img"
                                style='background-image: url("https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg");'
                            ></div>
                        </div>
                        <div class="film-list">
                            <div
                                class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios"
                            >
                                <div
                                    class="swiper-wrapper"
                                    style="transition-duration: 0ms; transform: translate3d(146.625px, 0px, 0px);"
                                >
                                    <div
                                        class="swiper-slide swiper-slide-active"
                                        v-for="(item, index) in cinemaDetail"
                                        :key="index"
                                    >
                                        <div
                                            class="film-item"
                                            @click="film(item.filmId)"
                                        >
                                            <div class="img-wrap">
                                                <img
                                                    :src="item.poster"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    class="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                ></span>
                            </div>
                        </div>
                        <cinemaMiddle
                            :film="filmId"
                            :filmData="cinemaDetail"
                        ></cinemaMiddle>
                        <time1
                            :showD="cinemaDetail"
                            :film="filmId"
                            :schedules="room"
                        ></time1>
                    </div>
                </div>
                <div class="service-info" style="display: none;">
                    <div class="services">
                        <div class="detail clearfix">
                            <div class="left">
                                前台兑换
                            </div>
                            <div class="right">
                                该影院支持卖座卡前台兑换，您可前往影院服务台，出示卖座卡卡号和密码，凭卡换取纸质电影票，入场观影。
                            </div>
                        </div>
                        <div class="detail clearfix">
                            <div class="left">
                                儿童票
                            </div>
                            <div class="right">
                                1.2m以下儿童免票无座，观看3D影片眼镜需付押金
                            </div>
                        </div>
                        <div class="detail clearfix">
                            <div class="left">
                                停车
                            </div>
                            <div class="right">
                                新世界商城停车场，价格在15-20元/小时
                            </div>
                        </div>
                        <div class="detail clearfix">
                            <div class="left">
                                优惠
                            </div>
                            <div class="right">
                                上海新世界影城影票一经售出概不退换：1、周二周三特价2、每天12:00之前22:00之后开场影片半价3、1.3米以下儿童2D/3D影片免费观影（须家长陪同.不提供座位）4、持学生证6月20日~8月31日（23周岁以下含23岁）45元.老年证（60周岁以上含60岁）凭身份证35元，.军官证.残疾证凭证件均可享受半价。
                            </div>
                        </div>
                        <div class="detail clearfix">
                            <div class="left">
                                3D眼镜
                            </div>
                            <div class="right">
                                3D眼镜押金100元/副，观影结束后退还
                            </div>
                        </div>
                        <div class="detail clearfix">
                            <div class="left">
                                影厅介绍
                            </div>
                            <div class="right">
                                上海新世界影城影票一经售出概不退换且观影时不能外带食品，若有不便，敬请见谅。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
    </div>
</template>

<script>
import { cinemaListXp, cinemaXP, cinemaFData } from "@/api/api";
import cinemaMiddle from "@/components/cinemaMiddle";
import time1 from "@/components/time";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import moment from "moment";
moment.locale("zh-cn");
export default {
    data() {
        return {
            cinemaPic: [], // 点击进电影院详情后的得到的电影院的信息
            cinemaDetail: [], // 自己本身获取到的数据
            detailTop: [],
            filmId: "", // 这是点击每个轮播图得到的电影Id
            room: [], // 影院影厅数据
            // cinemaDetail1: [], // 通过监听传到子组件time的数据
            showDate: [],
        };
    },
    methods: {
        film: function(Id) {
            this.filmId = Id;
        },
        back: function() {
            this.$router.go(-1);
        },
    },
    watch: {
        cinemaDetail: function(newx, oldx) {
            this.cinemaDetail1 = newx;
        },
        filmId: async function(newx, oldx) {
            this.filmId = newx;
            let cinemaID = localStorage.getItem("cinemaId");
            let fiId = "";
            let data = "";
            console.log(cinemaID);
            this.cinemaDetail.forEach((v) => {
                let date = v.showDate;
                let filmId = v.filmId;
                this.showDate.push({ filmId, date });
                if (newx == v.filmId) {
                    data = v.showDate[0];
                }
            });
            localStorage.setItem("setFilmId", newx);
            let cinemaFD = await cinemaFData(cinemaID, newx, data);
            this.room = cinemaFD.data.data.schedules;
        },
    },
    components: { cinemaMiddle, time1 },
    async mounted() {
        let cinemaId = localStorage.getItem("cinemaId");
        let cinemaXp = await cinemaXP(cinemaId);
        let cinemaListX = await cinemaListXp(cinemaId);

        this.cinemaPic = cinemaXp.data.data.cinema; // 地址
        this.cinemaDetail = cinemaListX.data.data.films; // 影片详情

        let filmid = localStorage.getItem("setFilmId");
        if (filmid == null) {
            localStorage.setItem("setFilmId", this.cinemaDetail[0].filmId);
        }
        // 电影周几时间戳
        // 电影影厅数据请求

        // `电影院影厅信息
        this.$nextTick(() => {
            var swiper = new Swiper(".swiper-container", {
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: true,
                slideToClickedSlide: true,
                centeredSlides: true,
                on: {
                    slideChange: async function() {
                        _this.filmId = _this.film[this.activeIndex].filmId;

                        let bgc = _this.$refs.src[this.activeIndex].src;
                        let res = `url(${bgc})`;
                        _this.$refs.srb.style.backgroundImage = res; // 点击或者切换轮播图，对应展示数据跟随变动，发起第二次请求

                        let time = _this.film[this.activeIndex].showDate;

                        let req = await cinemaFilmListData(
                            _this.$route.params.cinemaId,
                            _this.filmId,
                            time[0]
                        );
                        _this.cinemaFilm = req.data.data.schedules;
                    },
                },
            });
        });
    },
    // 进入的时候去掉底部导航
    async beforeCreate() {
        this.eventBus.$emit("footernav", false);
    },
    // 出来的时候显示底部导航
    beforeDestroy() {
        this.eventBus.$emit("footernav", true);
    },
};
</script>

<style lang="css" scoped>
.main,
body {
    height: 100%;
}
.cinema-schedule {
    overflow: hidden;
    padding-top: 44px;
    background: #fff;
    min-height: 100vh;
}
.header-left {
    position: fixed;
    top: 0;
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    z-index: 303;
}
.cinema-schedule .header-left img {
    vertical-align: middle;
}
.cinema-schedule .header-title {
    position: relative;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 15px;
    background: #fff;
    top: 0;
    height: 44px;
    line-height: 44px;
    z-index: 302;
}
.cinema-schedule .cinema-info .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #ffb232;
    overflow: hidden;
    position: relative;
    padding: 5px 0 15px;
}
.cinema-schedule .cinema-info .tags .tag {
    position: relative;
    padding: 0 6px;
    margin: 0 2.5px;
    font-size: 10px;
}
.cinema-schedule .cinema-info .tags .tag:after {
    content: " ";
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #ffb232;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 1px;
}
.cinema-schedule .cinema-info .tags:after {
    content: " ";
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
.cinema-schedule .cinema-info .address {
    height: 50px;
    position: relative;
    display: flex;
    padding-left: 17px;
    align-items: center;
}
.cinema-schedule .cinema-info .address .address-des {
    font-size: 14px;
    height: 20px;
    padding: 0 12px;
    flex: 1;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cinema-schedule .cinema-info .address .address-des:after {
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #ededed;
    color: #ededed;
    transform-origin: 100% 0;
    transform: scaleX(0.5);
}
.cinema-schedule .cinema-info .address .tel-icon {
    height: 18px;
    padding: 0 25px;
}
/* .cinema-schedule .schedule-wrap {
    position: relative;
}
.cinema-schedule .schedule-wrap .film-bg {
    position: absolute;
    top: 0;
    height: 160px;
    width: 100%;
    padding: 15px 0;
    overflow: hidden;
}
.cinema-schedule .schedule-wrap .film-list {
    height: 160px;
    padding: 15px 0;
    position: relative;
} */
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-container img {
    width: 90px;
    height: 130px;
}
.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
.swiper-slide {
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
    transform: scale(1);
}

/* .cinema-schedule .schedule-wrap .schedule-list {
    min-height: calc(100vh - 44px);
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item {
    height: 60px;
    padding: 15px;
    position: relative;
    background: #fff;
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item:not(:first-child):before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 0;
    transform: scaleY(0.5);
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left {
    float: left;
    width: 100px;
    margin-top: 12px;
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left .start-at {
    font-size: 15px;
    color: #191a1b;
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .left .end-at {
    font-size: 13px;
    color: #797d82;
    margin-top: 2px;
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .middle {
    float: left;
    width: calc(100% - 240px);
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item
    .middle
    .language {
    font-size: 15px;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 12px;
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .middle .hall {
    font-size: 13px;
    color: #797d82;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cinema-schedule .schedule-wrap .schedule-list .schedule-item .right {
    float: right;
    padding: 10px 0;
    line-height: 25px;
    color: #ff5f16;
    margin-top: 12px;
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item
    .right
    .buy-ticket {
    float: right;
    height: 25px;
    width: 50px;
    border-radius: 2px;
    position: relative;
    text-align: center;
    font-size: 13px;
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item
    .right
    .buy-ticket:after {
    content: " ";
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item
    .right
    .lowest-price {
    float: right;
    padding-right: 20px;
    font-size: 15px;
}
.cinema-schedule
    .schedule-wrap
    .schedule-list
    .schedule-item
    .right
    .lowest-price
    .price-icon {
    font-size: 10px;
} */
</style>
