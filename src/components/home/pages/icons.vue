<template>
    <div class="icons">
        <div class="icons-item" v-for="item in iconsList" :key="item.id">
            <van-image
                width="100%"
                lazy-load
                :src="item.imgUrl"
            />
            <p>{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            iconsList: [
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '景点门票'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title: '必游榜单'
                },
                {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                    title: '夏日玩水'
                },
                {
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                    title: '主题乐园'
                },
                {
                    id: '05',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    title: '动植物园'
                },
                {
                    id: '06',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    title: '故宫'
                },
                {
                    id: '07',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    title: '一日游'
                },
                {
                    id: '08',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
                    title: '公园'
                },
                {
                    id: '09',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title: '游乐场'
                },
                {
                    id: '10',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    title: '全部玩乐'
                }
            ]
        }
    },
}
</script>
<style scoped>
    .icons{
        overflow: hidden;/*解决子元素浮动导致高度塌陷 */
        width: 100%;
    }
    .icons-item{
        float: left;/*导致高度塌陷 */
        width: 25%;
        height: 0;
        padding-bottom: 25%;
    }
    .icons-item .van-image>>>.van-image__img{
        width: 110px;
        height: 110px;
        display: block;
        margin: 0 auto;
        padding-top: 20px;
    }
    .icons-item>p{
        margin-top: 5px;
        font-size: 28px;
        color: #212121;
        text-align: center;
    }
</style>