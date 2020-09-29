<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swiperList" :key="index">
                <van-image
                    width="100%"
                    height="100%"
                    lazy-load
                    :src="item.imgUrl"
                />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperList: [
                {
                    id: '01',
                    imgUrl: require('@/assets/swiper-img/swiper01.jpg')
                },
                {
                    id: '02',
                    imgUrl: require('@/assets/swiper-img/swiper02.jpg')
                },
                {
                    id: '03',
                    imgUrl: require('@/assets/swiper-img/swiper03.jpg')
                }
            ]
        }
    },
}
</script>
<style scoped>
    .swiper{
        /* 解决掉块问题 */
        height: 0;
        padding-bottom: 26.67%; /*根据屏幕宽度去计算百分比单位*/
    }
</style>