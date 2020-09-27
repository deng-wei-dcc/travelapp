<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="header-search">
            <i class="iconfont icon-sousuo"></i>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            北京 <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        display: flex;
        height: 0.4rem;
        line-height: 0.4rem;
        color: #fff;
        font-size: 0.16rem;
        background-color: #00bcd4;
    }
    .header-left{
        width: 0.2rem;
        padding: 0 0.1rem 0 0.1rem;
    }
    .header-search{
        flex: 1;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.14rem;
        margin: 0.05rem 0;
        border-radius: 0.05rem;
        padding-left: 0.1rem;
        color: #e4e7ea;
        background-color: #fff;
    }
    .header-right{
        font-size: 0.14rem;
        padding: 0 0.1rem;
    }
</style>