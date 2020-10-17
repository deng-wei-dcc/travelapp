<template>
    <div class="home">
        <Header />
        <Swiper />
        <Icons />
        <Location />
        <Activity />
    </div>
</template>
<script>
import Header from '@/components/home/pages/header.vue'
import Swiper from '@/components/home/pages/swiper.vue'
import Icons from '@/components/home/pages/icons.vue'
import Location from '@/components/home/pages/location.vue'
import Activity from '@/components/home/pages/activity.vue'
export default {
    components: {
        Header,
        Swiper,
        Icons,
        Location,
        Activity
    }
}
</script>
<style scoped>
    .home{
        background-color: #f5f5f5;
    }
</style>