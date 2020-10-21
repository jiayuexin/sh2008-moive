<template>
    <!--场次  -->
    <div class="schedule-list">
        <div>
            <div
                class="disable schedule-item"
                v-for="(item, index) in sched"
                :key="index"
            >
                <div class="left">
                    <div class="start-at">
                        {{ item.showAt | week }}
                    </div>
                    <div class="end-at">{{ item.endAt | week }}散场</div>
                </div>
                <div class="middle">
                    <div class="language">
                        {{ item.filmLanguage }}{{ item.imagery }}
                    </div>
                    <div class="hall">
                        {{ item.hallName }}
                    </div>
                </div>
                <div class="right">
                    <div class="buy-ticket" v-if="item.isOnsell == true">
                        购票
                    </div>
                    <div class="buy-ticket" v-else>
                        停售
                    </div>
                    <div class="lowest-price">
                        <span class="price-icon">￥</span
                        >{{ item.salePrice / 100 }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
moment.locale("zh-cn");
import { cinemaFData, cinemaListXp } from "@/api/api";

export default {
    data() {
        return {
            sched: [],
            id: "",
            cinemaPic: [],
        };
    },
    props: ["timer", "film", "schedules"],
    watch: {
        schedules: async function(newx, oldx) {
            this.sched = newx;
        },
        ID: function(newx) {
            this.id = newx;
        },
        timer: async function(newx) {
            let cinemaID = localStorage.getItem("cinemaId");
            let film = localStorage.getItem("setFilmId");
            let cinemaFD = await cinemaFData(cinemaID, film, newx);
            this.sched = cinemaFD.data.data.schedules;
        },
    },

    filters: {
        week: function(value) {
            return moment(value * 1000).format("HH:mm");
        },
    },
    async mounted() {
        let cinemaId = localStorage.getItem("cinemaId");
        let cinemaListX = await cinemaListXp(cinemaId);
        this.cinemaPic = cinemaListX.data.data.films; // 影片详情
        let film = this.cinemaPic[0].filmId;
        let time = this.cinemaPic[0].showDate[0];
        let cinemaFD = await cinemaFData(cinemaId, film, time);
        this.sched = cinemaFD.data.data.schedules;
    },
};
</script>

<style scoped>
.cinema-schedule .schedule-wrap .schedule-list {
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
}
</style>
