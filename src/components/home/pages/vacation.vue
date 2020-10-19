<template>
    <div class="vacation">
        <div class="head_title">周末去哪儿</div>
        <ul class="list">
            <li class="vacation_item" v-for="item in vacationList" :key="item.id">
                <div class="img_box">
                    <van-image
                        lazy-load
                        :src="item.imgUrl"
                    />
                </div>
                <div class="msg">
                    <p>{{item.title}}</p>
                    <p>{{item.des}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vacationList: [
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
                    title: '漂亮勇进，烧烤露营',
                    des: '轻松水上漂，任我乐逍遥'
                },
                 {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
                    title: '北京清凉避暑胜地',
                    des: '到到自然中享受“天然空调”的清凉'
                },
                 {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                    title: '北京比游TOP10',
                    des: '来北京必去的景点非这些地方莫属'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .head_title{
        font-size: 32px;
        padding: 24px;
    }
    .list{
        font-size: 28px;
    }
    .list .img_box{
        width: 100%;
        height: 0;
        padding-bottom: 37.4375%;/*解决掉块 */
    }
    .list .img_box .van-image{
        width: 100%;
    }
    .list>.vacation_item{
        margin-bottom: 10px;
        background-color: #fff;
    }
    .list>.vacation_item>.msg{
        padding: 20px 0 20px 20px;
    }
    .list>.vacation_item p{
        margin-top: 20px;
    }
    .list>.vacation_item p+p{
        color: #616161;
        font-size: 24px;
    }
</style>