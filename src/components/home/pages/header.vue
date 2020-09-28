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
        height: 80px;
        line-height: 80px;
        color: #fff;
        font-size: 32px;
        background-color: #00bcd4;
    }
    .header-left{
        width: 40px;
        padding: 0 20px 0 20px;
    }
    .header-search{
        flex: 1;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        margin: 10px 0;
        border-radius: 10px;
        padding-left: 20px;
        color: #e4e7ea;
        background-color: #fff;
    }
    .header-right{
        font-size: 28px;
        padding: 0 20px;
    }
</style>