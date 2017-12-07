<template>
    <div class="publish">
        <div class="publish-top">
            <h2>广告发布</h2>
            <p class="text">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，
                经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介
                部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有
                关广告的发播事宜，并对发播质量实施监督。</p>
            <div class="number">
                <span>购买数量：</span>
                <ul>
                    <li>-</li>
                    <li>20</li>
                    <li>+</li>
                </ul>
            </div>
            <div class="type">
                <span>行业：</span>
                <div class="div-select">
                    <select name="" id="">
                        <option value="">出版业</option>
                        <option value="">媒体</option>
                        <option value="">金融</option>
                        <option value="">互联网</option>
                        <option value="">游戏</option>
                    </select>
                </div>
            </div>
            <div class="version">
                <span>产品版本：</span>
                <ul>
                    <li class="active">客户版</li>
                    <li>代理商版</li>
                    <li>专家版</li>
                </ul>
            </div>
            <div class="time">
                <span>有效时间：</span>
                <ul>
                    <li class="active">半年</li>
                    <li>一年</li>
                    <li>三年</li>
                </ul>
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
      <div class="publish-bottom">
            <h2>产品说明</h2>
            <p class="text">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，
                经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介
                部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有
                关广告的发播事宜，并对发播质量实施监督。</p>
            <table class="publish-bottom-table">
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
.publish{
    float: left;
    width: 980px;
    margin-left: 10px;
    background-color: #FFFFFF;
}
/* 上半部分 */
.publish-top{
    padding:20px;
}
.publish-top h2{
    font-size: 20px;
    font-weight: bold;
}
.publish-top .text{
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
/* 购买数量 */
.number{
    clear: both;
    padding-bottom: 20px;
}
.number span{
    display: inline-block;
    width: 100px;
}
.number ul{
    display: inline-block;
    width: 75%;
}
.number ul li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width:27px;
    text-align: center;
    cursor: pointer;
}
.number ul li:nth-child(2){
    margin-left:-5px;
}
.number ul li:nth-child(3){
    margin-left:-5px;
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
.type .div-select{
    display: inline-block;
    width: 75%;
}
.type .dic-select select{
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
.time ul{
    display: inline;
    width: 100px;
}
.time ul li{
    display: inline;
    border: 1px solid #e3e3e3;
    background: #FFFFFF;
    color:#3e3e3e;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.time ul li.active,
.time ul li:hover{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
/* 产品版本 */
.version{
    clear: both;
    padding-bottom: 20px;
}
.version span{
    display: inline-block;
    width: 100px;
}
.version ul{
    display: inline;
    width: 100px;
}
.version ul li{
    display: inline;
    border: 1px solid #e3e3e3;
    background: #FFFFFF;
    color:#3e3e3e;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.version ul li.active,
.version ul li:hover{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
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
/* 下半 部分 */
.publish-bottom{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.publish-bottom h2{
    font-size: 20px;
    font-weight: bold;
}
.publish-bottom .text{
    background: #f7fcff;
    padding: 10px 0;
    line-height: 1.8;
    letter-spacing: 2px;
}
/* 下半 部分表格 */
.publish-bottom-table{
    width: 96%;
    margin-top: 20px;
    margin-right:20px;
}
.publish-bottom-table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.publish-bottom-table tbody .row{

}
.publish-bottom-table tbody .row .col{
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>
