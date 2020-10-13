<template>
    <div class="nav">
        <ul>
            <router-link to="/film" tag="li" active-class="active"><i class="iconfont icondianying"></i><p>电影</p></router-link>
            <router-link to="/cinema" tag="li" active-class="active"><i class="iconfont iconyingyuan"></i><p>影院</p></router-link>
            <!-- <router-link tag="li" to="/cinema" active-class="active"><i class="iconfont iconzixun"></i><p>资讯</p></router-link> -->
            <router-link to="/center" tag="li" active-class="active"><i class="iconfont icongeren"></i><p>个人</p></router-link>
        </ul>
    </div>
</template>
<script>
    import('@/assets/iconfont/iconfont.css')

export default {
    data() {
        return {};
    },
    mounted() {},
};
</script>


<style lang="scss" scoped>
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    border-top: 1px solid #ccc;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;

    ul {
        display: flex;
        align-items: center;
        li {
            margin-top: 5px;
            flex: 1;
            height: 43px;
            &.active {
                color: #fe5100;
            }
            p {
                margin-top: 2px;
            }
            i {
                font-size: 20px;
            }
        }  
        font-size: 12px;
    }
}
</style>