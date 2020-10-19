<template>
    <div>
        <FilmList
            :list="list"
            :key="'film' + list.length"
            :type="type"
        ></FilmList>
    </div>
</template>

<script>
import { nowPlayingListData } from "@/api/api";
import FilmList from "@/components/FilmList";
export default {
    data: function() {
        return {
            list: [],
            page: 1,
            type: 1, //当前传递的数据为正在热映的电影数据
        };
    },
    async mounted() {
        let cityid = localStorage.getItem("cityId");
        let clickId = localStorage.getItem("clickId");
        if (cityid != null) {
            if (clickId == null) {
                if (cityid == 310113) {
                    cityid = 310100;
                }
            } else {
                cityid = clickId;
            }
        } else {
            cityid = 310100;
        }
        let res = await nowPlayingListData(this.page, cityid);
        this.list = res.data.data.films;
    },
    components: {
        FilmList,
    },
};
</script>
