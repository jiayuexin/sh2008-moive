<template>
    <div class="date-list">
        <div class="tabs-bar-wrapper dateWrap">
            <div class="tabs-bar">
                <ul class="tabs-nav">
                    <li class="active" style="padding: 0px 15px;">
                        <span>今天10月19日</span>
                    </li>
                    <li class="" style="padding: 0px 15px;">
                        <span>明天10月20日</span>
                    </li>
                    <li class="" style="padding: 0px 15px;">
                        <span>后天10月21日</span>
                    </li>
                    <div
                        class="tab-ink-bar-wrapper"
                        style="transform: translate3d(0%, 0px, 0px); padding: 0px 15px;"
                    >
                        <span class="tab-ink-bar" style="width: 89px;"></span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

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
