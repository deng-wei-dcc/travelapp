<template>
    <div class="location border-t">
        <div class="item border-r">
            <i class="iconfont icon-dizhiguanli"></i>
            <span>北京大兴</span>
        </div>
        <div class="item">
            <i class="iconfont icon-diqiu"></i>
            <span>玩水季</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .location{
        display: flex;
        background-color: #fff;
    }
    .location>.item{
        flex: 1;
        font-size: 32px;
        text-align: center;
        line-height: 100px;
    }
    .item>i{
        font-size: 32px;
    }
</style>