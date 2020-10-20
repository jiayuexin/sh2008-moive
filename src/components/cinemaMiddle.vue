<template>
    <div>
        <div class="film-info">
            <div class="film-head">
                <span class="film-name">{{ item.name }}</span>

                <span class="film-score">{{ item.grade }}</span>
                <span class="film-score-unit">分</span>
            </div>
            <div class="film-desc">
                {{ item.category }} | {{ item.runtime }}分钟 |
                {{ item.director }} | {{ item.actors | actors }}
            </div>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg=="
                width="4px"
                height="8px"
                alt=""
                class="film-more"
                @click="go(item.filmId)"
            />
        </div>
    </div>
</template>

<script>
import { detailData } from "@/api/api";
export default {
    data() {
        return {
            id: "",
            item: [],
        };
    },
    props: ["film", "filmData"],
    watch: {
        film: async function(newx, oldx) {
            let filmData = await detailData(newx);
            this.item = filmData.data.data.film;
        },
        filmData: function(newData, oldData) {
            this.item = newData[0];
        },
    },
    // created() {
    //     let a = 1603123200 * 1000;
    //     let b = moment(a).format("ddd YYYY-MM-DD hh:mm:ss");
    //     console.log(b);
    // },

    filters: {
        actors: function(value) {
            let val = "";
            value.forEach((v, k) => {
                val += v.name + " ";
            });
            return val;
        },
    },
    methods: {
        go: function(filmId) {
            this.$router.push({ name: "detail", params: { filmId } });
        },
    },
};
</script>

<style scoped>
.film-info {
    width: 100%;
    background: #fff;
    height: 80px;
    padding: 15px 0;
    position: relative;
}
.film-info .film-head {
    margin-bottom: 10px;
    text-align: center;
    line-height: 18px;
}
.film-info .film-head .film-name {
    font-size: 15px;
    color: #191a1b;
    padding-right: 5px;
}
.film-info .film-head .film-score {
    font-size: 16px;
    font-style: italic;
    color: #ffb232;
}
.film-info .film-head .film-score-unit {
    font-size: 10px;
    color: #ffb232;
}
.film-info .film-desc {
    text-align: center;
    height: 18px;
    color: #797d82;
    font-size: 13px;
    padding: 0 12%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.film-info .film-more {
    position: absolute;
    right: 15px;
    top: 0;
    margin-top: 36px;
}
.film-info:after {
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
