<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    // 在页面挂载完毕以后加载
    mounted() {
        // vue是一部渲染需要加这行代码
        this.$nextTick(() => {
            new Swiper(".swiper-container", {
                slidesPerView: 4,
                spaceBetween: 10,
            });
        });
    },
};
</script>
