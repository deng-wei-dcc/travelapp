<template>
    <div class="home">
        <Header />
        <Swiper />
        <Icons />
    </div>
</template>
<script>
import Header from '@/components/home/pages/header.vue'
import Swiper from '@/components/home/pages/swiper.vue'
import Icons from '@/components/home/pages/icons.vue'
export default {
    components: {
        Header,
        Swiper,
        Icons
    }
}
</script>
<style scoped>

</style>