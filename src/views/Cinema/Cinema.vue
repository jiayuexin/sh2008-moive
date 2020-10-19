<template>
    <div class="list ">
        <div class="header">
            <div class="left">
                <div class="city">
                    <span @click="goPosition()">{{ city1 }}</span>

                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                    />
                </div>
            </div>
            <div class="title">
                <div>影院</div>
            </div>
            <div class="right">
                <div>
                    <div class="toCinemaSearch">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
                            width="18px"
                            height="18px"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="cinema-list-tag">
            <div class="cinema-list-tag-name">
                <label class="">
                    全城
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>

                <label class="">
                    APP订票
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>

                <label class="">
                    最近去过
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                        style="display: none;"/>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                        width="6px"
                        height="3px"
                /></label>
            </div>
        </div>

        <!-- 列表 -->
        <div class="cinema-banner-wrap">
            <!-- Loading导入 -->
            <Loading v-if="!loading"></Loading>
            <ul class="cinema-list">
                <li
                    class="cinema-banner-item"
                    v-for="(items, indexs) in cinemasTop"
                    :key="indexs"
                >
                    <div class="name">
                        <span class="title">{{ items.name }}</span>
                        <span class="icon" v-if="cinemasTop.length !== 0"
                            >影院券</span
                        >
                    </div>
                    <div class="type">
                        {{ items.masterTitle }}
                    </div>
                </li>
            </ul>

            <div
                class="cinema-list-wrap"
                v-for="(item, index) in cinemas"
                :key="index"
            >
                <ul>
                    <li @click="cinema(item.cinemaId)">
                        <a class="cinema-item-wrap">
                            <div class="cinema-info">
                                <span class="cinema-info-if">
                                    {{ item.name }}
                                </span>
                                <span class="cinema-address">
                                    {{ item.address }}
                                </span>
                            </div>
                            <div>
                                <span class="price-fmt">
                                    <i>￥</i>
                                    <span
                                        class="interge"
                                        style="font-size: 14px;"
                                    >
                                        {{ item.lowPrice / 100 }}
                                    </span>
                                    <span class="upon">起</span>
                                </span>
                                <span class="cinema-gpsAddress">
                                    <span>
                                        <strong>距离未知</strong>
                                    </span>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "@/components/loading";
import { cinemaListData, cinemaTopData, userInfo } from "@/api/api";
import Bscroll from "better-scroll";
import Vue from "vue";
import { Dialog } from "vant";
import "vant/lib/index.css";
Vue.use(Dialog);

import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
    data() {
        return {
            cinemas: [],
            cinemasTop: [],
            loading: true,
            bs: null,
            height: 0,
            city1: "",
            cinemaId: "",
        };
    },
    components: {
        Loading,
    },
    async mounted() {
        let cityId = localStorage.getItem("clickId");

        if (cityId != "undefined") {
            if (cityId == null) {
                cityId = 310100;
            }
            let res = await cinemaTopData(cityId);
            this.cinemasTop = res.data.data;

            let ret = await cinemaListData(cityId);
            this.cinemas = ret.data.data.cinemas;
        }

        var clickName = localStorage.getItem("clickName");
        var cityName = localStorage.getItem("cityName");
        if (clickName == null) {
            this.city1 = cityName;
        } else {
            this.city1 = clickName;
        }
    },

    methods: {
        cinema: function(ID) {
            let cinemaId = localStorage.setItem("cinemaId", ID);
            this.$router.push("/cinemaDetails");
        },
        ...mapMutations(["getCityId", "getCityName"]),
        goPosition: function() {
            this.$router.push("/city");
        },
        getLocation() {
            let _this = this;
            AMap.plugin("AMap.Geolocation", function() {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 5000,
                });
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, "complete", onComplete);
                AMap.event.addListener(geolocation, "error", onError);
                // data是具体的定位信息
                function onComplete(data) {
                    let cityId = data.addressComponent.adcode;
                    let cityName = data.addressComponent.province.substr(0, 2);
                    let clickName = localStorage.getItem("clickName");
                    _this.getCityId(cityId);
                    localStorage.setItem("cityName", cityName);
                    _this.getCityName(cityName);
                    if (clickName == "undefined" || clickName == null) {
                        _this.city1 = cityName;
                    } else {
                        _this.city1 = clickName;
                    }
                }
                function onError(data) {
                    // 失败 启用 ip定位
                    AMap.plugin("AMap.CitySearch", function() {
                        var citySearch = new AMap.CitySearch();
                        citySearch.getLocalCity(function(status, result) {
                            if (status === "complete" && result.info === "OK") {
                                // 查询成功，result即为当前所在城市信息
                                // console.log("通过ip获取当前城市：", result);
                            }
                        });
                        return;
                    });
                }
            });
        },
    },
    computed: {
        ...mapState(["city", "cityId", "positionName"]),
    },
    created() {
        this.getLocation();
    },
};
</script>

<style lang="scss" scoped>
// .scroll {
//     overflow: hidden;
// }
.list {
    margin-bottom: 51px;
    padding-top: 95px;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: #fff;
    display: flex;
    z-index: 50;

    .left {
        min-width: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 15px;

        .city {
            display: flex;
            align-items: center;

            span {
                display: inline-block;
                font-size: 13px;
                max-width: 58px;
                height: 16px;
                line-height: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 5px;
                color: #191a1b;
            }
            img {
                vertical-align: middle;
            }
        }
    }

    .title {
        text-align: center;
        font-size: 17px;
        color: #191a1b;
        flex: 1;
        overflow: hidden;
    }

    .right {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;

        div {
            width: 100%;
            text-align: right;
        }
        img {
            vertical-align: middle;
        }
    }
}

.cinema-list-tag {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;

    .cinema-list-tag-name {
        position: relative;

        label {
            float: left;
            width: 33.3%;
            line-height: 49px;
            font-size: 14px;
            color: #191a1b;
            letter-spacing: -0.2px;
        }

        img {
            vertical-align: middle;
            padding-left: 2px;
        }
    }
}

.cinema-banner-wrap {
    border-top: 1px solid #ededed;
    overflow-x: hidden;

    .cinema-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            padding: 15px;
            background-color: #fff;
            position: relative;

            .name {
                font-size: 15px;
                color: #18191a;
                position: relative;

                .icon {
                    color: #ffb245;
                    margin-left: 7px;
                    font-size: 10px;
                    padding: 0 6px;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 1px solid #ffb245;
                    border-radius: 4px;
                }
            }
            .type {
                margin-top: 5px;
                font-size: 13px;
                color: #797d82;
            }
        }
    }
}

.cinema-list-wrap {
    z-index: 100;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            position: relative;
            background-color: #fff;
            padding: 15px;
            border-bottom: 1px solid #ededed;

            .cinema-item-wrap {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .cinema-info {
                    width: calc(100% - 65px);
                    text-align: left;
                    padding-right: 15px;
                    float: left;

                    .cinema-info-lf {
                        color: #191a1b;
                        font-size: 15px;
                        float: left;
                        display: block;
                    }
                    .cinema-address {
                        max-width: 80%;
                        color: #797d82;
                        font-size: 12px;
                        margin-top: 5px;
                        display: block;
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .price-fmt {
                    width: 65px;
                    margin-left: -15px;
                    font-size: 13px;
                    color: #ff5f16;
                    height: 0 !important;
                    display: inline-table !important;
                    float: none !important;

                    i {
                        font-size: 11px;
                        font-style: normal;
                    }
                }
                .upon {
                    color: #ff5f16;
                    font-size: 10px;
                }
                .cinema-gpsAddress {
                    display: block;
                    font-size: 11px;
                    color: #797d82;
                    margin-top: 5px;
                    margin-left: -13px;

                    strong {
                        font-weight: 400;
                        display: block;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
}
</style>
