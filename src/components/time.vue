<template>
    <div class="date-list">
        <div class="tabs-bar-wrapper dateWrap">
            <div class="tabs-bar">
                <ul
                    class="tabs-nav"
                    v-for="(item, index) in showDate"
                    :key="index"
                    v-if="item.filmId == id"
                >

                    <van-tabs v-model="active">
                        <van-tab v-for="(v, k) in item.date" :key="k">
                            <template #title>
                                {{ v | week }}
                            </template>
                        </van-tab>
                    </van-tabs>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Vue from "vue";
import { Icon, Tab, Tabs } from "vant";
import "vant/lib/index.css";
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
moment.locale("zh-cn");
export default {
    data() {
        return {
            showDate: [],
            id: "",
            active: 0,
        };
    },
    props: ["showD", "film"],
    watch: {
        showD: function(newx, oldx) {
            newx.forEach((v) => {
                let date = v.showDate;
                let filmId = v.filmId;
                this.showDate.push({ filmId, date });
            });
        },
        film: function(newx, oldx) {
            this.id = newx;
        },
    },
    filters: {
        week: function(value) {
            return moment(value * 1000).format("ddd MM月DD日");
        },
    },
    mounted() {
        if (this.id == "") {
            let cinemaOne = JSON.parse(localStorage.getItem("cinemaOne"));
            this.id = cinemaOne.filmId;
        }
    },
};
</script>

<style scoped>
.cinema-schedule .schedule-wrap .date-list {
    width: 100%;
}
.tabs-bar-wrapper {
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
}
.tabs-bar-wrapper .tabs-bar {
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
    color: #ff5f16;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
    color: #ff5f16;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav li {
    flex-shrink: 0;
    color: #191a1b;
    text-align: center;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
    position: absolute;
    margin: auto;
    top: 30px;
    left: 0;
    transform: translateZ(0);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper .tab-ink-bar {
    border-bottom: 2px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
}
.tabs-bar-wrapper .tabs-bar:after {
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
</style>
