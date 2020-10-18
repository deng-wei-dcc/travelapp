<template>
    <div class="like">
        <div class="head">
            <van-image
                lazy-load
                src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
            />
            <span>猜你喜欢</span>
        </div>
        <ul class="list">
            <li class="border-b" v-for="item in likeList" :key="item.id">
                <div class="img">
                    <van-image
                        lazy-load
                        :src="item.imgUrl"
                    />
                </div>
                <div class="msg">
                    <p class="like_name">{{item.title}}</p>
                    <p class="like_msg">{{item.msg}}</p>
                    <p class="like_map">
                        <span class="like_mark">￥<b>{{item.pre}}</b></span>起
                        <span class="address">{{item.address}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likeList: [
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.png',
                    title: '金海湖风景区',
                    msg: '1341条评论',
                    pre: 18.8,
                    address: '平谷区'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
                    title: '北京国际鲜花港',
                    msg: '1900条评论',
                    pre: 28.8,
                    address: '顺义区'
                }
            ]
        }
    },
}
</script>
<style scoped>
.like{
    margin-top: 20px;
    padding: 0 20px;
    background-color: #fff;
}
.like>.head{
    font-size: 32px;
    padding: 20px 0;
}
.head .van-image{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.list>li{
    position: relative;
    overflow: hidden;
    font-size: 28px;
    padding: 20px 0;
}
.list>li>div{
    float: left;
}
.list>li>.img{
    width: 200px;
    height: 200px;
}
.list>li>.msg{
    padding-left: 22px;
}
.msg>.like_name{
    font-size: 36px;
    color: #212121;
    margin-top: 40px;
}
.msg>.like_msg{
    margin-top: 30px;
    font-size: 24px;
    color: #616161;
}
.msg>.like_map{
    margin-top: 30px;
    color: #616161;
}
.msg>.like_map>.like_mark{
    color: #ff8300;
    font-size: 40px;
}
.msg>.like_map>.address{
    position: absolute;
    right: 0;
    margin-top: 10px;
}
</style>