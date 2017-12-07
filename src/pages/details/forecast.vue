<template>
    <div class="forecast">
        <div class="forecast-top">
            <h2>数据预测</h2>
            <p class="text">未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革
                的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，
                《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
            <div class="number">
                <span>购买数量：</span>
                <ul>
                    <li>-</li>
                    <li>20</li>
                    <li>+</li>
                </ul>
            </div>
            <div class="Media">
                <span>媒介：</span>
                <ul>
                    <li class="active">纸质报告</li>
                    <li>pdf</li>
                    <li>页面报告</li>
                    <li>邮件</li>
                </ul>
            </div>
            <div class="time">
                <span>有效时间：</span>
                <p>一年</p>
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
      <div class="forecast-bottom">
            <h2>产品说明</h2>
            <p class="text">2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，
                会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，
                并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；
                当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，
                它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 
                大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录
                和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士
                深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。
                在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
                关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，
                《大数据预测》都会告诉你。</p>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.forecast{
    float: left;
    width: 980px;
    margin-left: 10px;
    background-color: #FFFFFF;
}
/* 上半部分 */
.forecast-top{
    padding:20px;
}
.forecast-top h2{
    font-size: 20px;
    font-weight: bold;
}
.forecast-top .text{
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

/* 媒介 */
.Media{
    clear: both;
    padding-bottom: 20px;
}
.Media span{
    display: inline-block;
    width: 100px;
}
.Media ul{
    display: inline;
    width: 100px;
}
.Media ul li{
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
.Media ul li.active,
.Media ul li:hover{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
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
/* 下半 部分 */
.forecast-bottom{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.forecast-bottom h2{
    font-size: 20px;
    font-weight: bold;
}
.forecast-bottom .text{
    background: #f7fcff;
    padding: 10px 0;
    line-height: 1.8;
    letter-spacing: 2px;
}
</style>
