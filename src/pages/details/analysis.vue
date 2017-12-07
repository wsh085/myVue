<template>
    <div class="analysis">
        <div class="analysis-top">
            <h2>流量分析</h2>
            <p class="text">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，
                从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动
                中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在
                网络营销管理的角度来考虑的</p>
            <div class="number">
                <span>购买数量：</span>
                <ul>
                    <li>-</li>
                    <li>1</li>
                    <li>+</li>
                </ul>
            </div>
            <div class="type">
                <span>产品类型：</span>
                <div class="div-select">
                    <select name="" id="">
                        <option value="">入门版</option>
                        <option value="">中级版</option>
                        <option value="">高级版</option>
                    </select>
                </div>
            </div>
            <div class="time">
                <span>有效时间：</span>
                <ul>
                    <li class="active">半年</li>
                    <li>一年</li>
                    <li>三年</li>
                </ul>
            </div>
            <div class="version">
                <span>产品版本：</span>
                <ul>
                    <li class="active">客户版</li>
                    <li>代理商版</li>
                    <li>专家版</li>
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
      <div class="analysis-bottom">
            <h2>产品说明</h2>
            <p class="text">网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于
                原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告
                对企业经营策略的价值。</p>
            <h2>用户行为指标</h2>
            <p class="text">用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</p>
            <p class="text">用户在网站的停留时间；</p>
            <p class="text">用户来源网站（也叫“引导网站”）；</p>
            <p class="text">用户所使用的搜索引擎及其关键词；</p>
            <p class="text">在不同时段的用户访问量情况等。</p>
            <h2>浏览网站方式</h2>
            <p class="text">用户上网设备类型</p>
            <p class="text">用户浏览器的名称和版本</p>
            <p class="text">访问者电脑分辨率显示模式</p>
            <p class="text">用户所使用的操作系统名称和版本</p>
            <p class="text">用户所在地理区域分布状况等</p>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.analysis{
    float: left;
    width: 980px;
    margin-left: 10px;
    background-color: #FFFFFF;
}
/* 上半部分 */
.analysis-top{
    padding:20px;
}
.analysis-top h2{
    font-size: 20px;
    font-weight: bold;
}
.analysis-top .text{
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
.analysis-bottom{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.analysis-bottom h2{
    font-size: 20px;
    font-weight: bold;
}
.analysis-bottom .text{
    background: #f7fcff;
    padding: 10px 0;
    line-height: 1.8;
    letter-spacing: 2px;
}
</style>
