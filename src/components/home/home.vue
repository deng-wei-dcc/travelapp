<template>
    <div class="home">
        <Header />
        <Swiper />
        <Icons />
        <Location />
        <Activity />
        <Hot />
        <Like />
        <Vacation />
    </div>
</template>
<script>
import Header from '@/components/home/pages/header.vue'
import Swiper from '@/components/home/pages/swiper.vue'
import Icons from '@/components/home/pages/icons.vue'
import Location from '@/components/home/pages/location.vue'
import Activity from '@/components/home/pages/activity.vue'
import Hot from '@/components/home/pages/hot.vue'
import Like from '@/components/home/pages/like.vue'
import Vacation from '@/components/home/pages/vacation.vue'
export default {
    components: {
        Header,
        Swiper,
        Icons,
        Location,
        Activity,
        Hot,
        Like,
        Vacation
    }
}
</script>
<style scoped>
    .home{
        background-color: #f5f5f5;
    }
</style>