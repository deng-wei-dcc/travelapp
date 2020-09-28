<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <van-image
                    width="100%"
                    height="100%"
                    lazy-load
                    src="http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"
                />
            </van-swipe-item>
            <van-swipe-item>
                <van-image
                    width="100%"
                    height="100%"
                    lazy-load
                    src="http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"
                />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .swiper{
        height: 200px;
    }
</style>