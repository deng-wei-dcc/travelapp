<template>
    <div class="hot">
        <div class="hot_top">
            <div class="title">
                <van-image
                    width="100"
                    height="100"
                    lazy-load
                    src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
                />
                <span>本周热门榜单</span>
            </div>
            <div class="more">
                <span>全部榜单 ></span>
                <!-- <i class="iconfont icon-fanhui"></i> -->
            </div>
        </div>
        <div class="list">
            <van-swipe :loop="false" :width="setWidth" :show-indicators="false">
                <van-swipe-item v-for="item in hotList" :key="item.id">
                    <div class="item">
                        <van-image
                            width="100"
                            height="100"
                            lazy-load
                            :src="item.imgUrl"
                        />
                        <p>{{item.title}}</p>
                        <p><span class="hot_mark">￥{{item.mark}}</span>起</p>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            setWidth: 0,
            hotList: [
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg',
                    title: '故宫',
                    mark: '20'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg',
                    title: '十渡聚龙湾玻璃栈道',
                    mark: '35'
                },
                {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg',
                    title: '八达岭长城',
                    mark: '25'
                },
                {
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg',
                    title: '水立方',
                    mark: '14'
                },
                {
                    id: '05',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg',
                    title: '定陵',
                    mark: '50'
                },
            ]
        }
    },
    created() {
        this.getHtmlWidth()
        window.addEventListener('resize',this.getHtmlWidth)
    },
    methods: {
        getHtmlWidth(){
            const html = document.querySelector('html')
            const width = html.getBoundingClientRect().width
            const w = width / 750 * 240
            this.setWidth = w
        }
    },
}
</script>
<style scoped>
.hot{
    margin-top: 20px;
    background-color: #fff;
}
.hot>.hot_top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.hot_top>.title{
    font-size: 32px;
    color: #212121;
}
.hot_top>.title .van-image{
    width: 30px !important;
    height: 30px !important;
}
.hot_top>.more{
    font-size: 28px;
}
.hot_top>.more>i{
    position: absolute;
    right: 20px;
    color: #616161;
}
.list .item{
    width: 200px;
    height: 100%;
    margin: 0 20px;
}
.item .van-image{
    width: 100% !important;
    height: auto !important;
}
.item p{
    text-align: center;
    font-size: 28px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.item p .hot_mark{
    color: #ff8300;
    font-size: 32px;
}
</style>