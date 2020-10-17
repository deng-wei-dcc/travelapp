<template>
    <div class="activity border-t">
        <div class="item border-r">
            <van-image
                width="100"
                height="100"
                lazy-load
                src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png"
            />
        </div>
        <div class="item">
            <van-image
                width="100"
                height="100"
                lazy-load
                src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png"
            />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .activity{
        display: flex;
        margin-top: 20px;
        background-color: #fff;
    }
    .activity>.item{
        flex: 1;
        height: 140px;
    }
    .item>.van-image{
        width: 100% !important;
        height: 100% !important;
    }
</style>