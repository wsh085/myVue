<template>
    <div class="count">
        <div class="count-top">
            <h2>数据统计</h2>
            <p class="text">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、
              决策等的数值加以统计为解决方案做前期准备。</p>
            <div class="type">
                <span>产品类型：</span>
                <ul>
                    <li class="active">红色版</li>
                    <li>绿色版</li>
                    <li>紫色版</li>
                </ul>
            </div>
            <div class="address">
                <span>适用地区：</span>
                <div class="div-select">
                    <select name="" id="">
                        <option value="">北京</option>
                        <option value="">上海</option>
                        <option value="">广州</option>
                        <option value="">天津</option>
                        <option value="">武汉</option>
                        <option value="">重庆</option>
                    </select>
                </div>
            </div>
            <div class="time">
                <span>有效时间：</span>
                <p>半年</p>
            </div>
            <div class="price">
                <span>总价：</span>
                <p>500元</p>
            </div>
            <div class="buy">
                <div class="empty"></div>
                <span>立即购买</span>
            </div>  
        </div>
        <div class="count-bottom">
            <h2>产品说明</h2>
            <p class="text">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、
              决策等的数值加以统计为解决方案做前期准备。</p>
            <table class="count-bottom-table">
                <tbody>
                    <tr class="row">
                        <td class="col"><div class="intro-pic"><label>安全安保</label></div></td>
                        <td class="col"><div class="intro-pic"><label>办公文教</label></div></td>
                        <td class="col"><div class="intro-pic"><label>彩票</label></div></td>
                        <td class="col"><div class="intro-pic"><label>车辆物流</label></div></td>
                        <td class="col"><div class="intro-pic"><label>成人用品</label></div></td>
                        <td class="col"><div class="intro-pic"><label>出版传媒</label></div></td>
                        <td class="col"><div class="intro-pic"><label>电脑硬件</label></div></td>
                    </tr>
                    <tr class="row">
                        <td class="col"><div class="intro-pic"><label>电子电工</label></div></td>
                        <td class="col"><div class="intro-pic"><label>房地产建筑装修</label></div></td>
                        <td class="col"><div class="intro-pic"><label>分类平台</label></div></td>
                        <td class="col"><div class="intro-pic"><label>服装鞋帽</label></div></td>
                        <td class="col"><div class="intro-pic"><label>箱包饰品</label></div></td>
                        <td class="col"><div class="intro-pic"><label>化工原料制品</label></div></td>
                        <td class="col"><div class="intro-pic"><label>机械设备</label></div></td>
                    </tr>
                    <tr class="row">
                        <td class="col"><div class="intro-pic"><label>家庭日用品</label></div></td>
                        <td class="col"><div class="intro-pic"><label>家用电器</label></div></td>
                        <td class="col"><div class="intro-pic"><label>教育培训</label></div></td>
                        <td class="col"><div class="intro-pic"><label>节能环保</label></div></td>
                        <td class="col"><div class="intro-pic"><label>金融服务</label></div></td>
                        <td class="col"><div class="intro-pic"><label>礼品</label></div></td>
                        <td class="col"><div class="intro-pic"><label>旅游住宿</label></div></td>
                    </tr>
                    <tr class="row">
                        <td class="col"><div class="intro-pic"><label>美容化妆</label></div></td>
                        <td class="col"><div class="intro-pic"><label>母婴护理</label></div></td>
                        <td class="col"><div class="intro-pic"><label>农林牧渔</label></div></td>
                        <td class="col"><div class="intro-pic"><label>软件</label></div></td>
                        <td class="col"><div class="intro-pic"><label>商务服务</label></div></td>
                        <td class="col"><div class="intro-pic"><label>生活服务</label></div></td>
                        <td class="col"><div class="intro-pic"><label>食品保健品</label></div></td>
                    </tr>
                    <tr class="row">
                        <td class="col"><div class="intro-pic"><label>手机数码</label></div></td>
                        <td class="col"><div class="intro-pic"><label>通讯服务设备</label></div></td>
                        <td class="col"><div class="intro-pic"><label>网络服务</label></div></td>
                        <td class="col"><div class="intro-pic"><label>医疗服务</label></div></td>
                        <td class="col"><div class="intro-pic"><label>游戏</label></div></td>
                        <td class="col"><div class="intro-pic"><label>运动休闲娱乐</label></div></td>
                        <td class="col"><div class="intro-pic"><label>招商加盟</label></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.count{
    float: left;
    width: 980px;
    margin-left: 10px;
    background-color: #FFFFFF;
}
/* 上半部分 */
.count-top{
    padding:20px;
}
.count-top h2{
    font-size: 20px;
    font-weight: bold;
}
.count-top .text{
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
/* 产品类型 */
.type{
    clear: both;
    padding-bottom: 20px;
}
.type span{
    display: inline-block;
    width: 100px;
}
.type ul{
    display: inline-block;
    width: 75%;
}
.type ul li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.type ul li.active{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
/* 适用地区 */
.address{
    clear: both;
    padding-bottom: 20px;
}
.address span{
    display: inline-block;
    width: 100px;
}
.address .div-select{
    display: inline-block;
    width: 75%;
}
.address .dic-select select{
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
}
/* 有效时间 */
.time{
    clear: both;
    padding-bottom: 20px;
}
.time span{
    display: inline-block;
    width: 100px;
}
.time p{
    display: inline-block;
    width: 75%;
}
/* 总价 */
.price{
    clear: both;
    padding-bottom: 20px;
}
.price span{
    display: inline-block;
    width: 100px;
}
.price p{
    display: inline-block;
    width: 75%;
}
/* 购买 */
.buy{
    clear: both;
    padding-bottom: 20px;
}
.buy .empty{
    display: inline-block;
    width: 100px;
}
.buy span{
    background: #ced1cf;
    color:#3e3e3e;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
.buy span:hover{
    background: #4fc08d;
    color:#FFFFFF;
}
/* 下半部分 */
.count-bottom{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.count-bottom h2{
    font-size: 20px;
    font-weight: bold;
}
.count-bottom .text{
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
.count-bottom-table{
    width: 96%;
    margin-top: 20px;
    margin-right:20px;
}
.count-bottom-table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.count-bottom-table tbody .row{

}
.count-bottom-table tbody .row .col{
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>

