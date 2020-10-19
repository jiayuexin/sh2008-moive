<template>
    <div>
        <FilmList
            :list="dahei"
            :key="'film' + dahei.length"
            :type="type"
        ></FilmList>
    </div>
</template>

<script>
import { comingSoonListData } from "@/api/api";
import FilmList from "@/components/FilmList";
export default {
    data: function() {
        return {
            dahei: [],
            page: 1,
            type: 2,
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
        let res = await comingSoonListData(this.page, cityid);
        this.dahei = res.data.data.films;
    },
    components: {
        FilmList,
    },
};
</script>
