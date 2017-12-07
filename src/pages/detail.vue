<template>
  <div class="detail">
      <div class="detail-left">
          <img src="../assets/images/3.png">
          <ul>
              <li>数据统计</li>
              <li>数据预测</li>
              <li>流量分析</li>
              <li>广告发布</li>
          </ul>
      </div>
      <div class="detail-right">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* 左边 部分 */
.detail{
    width:1200px;
    margin:0 auto;
    overflow: hidden;
    padding-top:20px;
}
.detail-left{
    float: left;
    width: 200px;
    text-align: center;
    background-color: #FFFFFF;
    padding:20px 0;
}
.detail-left ul{
    margin-top: 20px;
    list-style:none;
}
.detail-left ul li{
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    background: #FFFFFF;
    color: #323433;
}
.detail-left ul li:hover{
    background: #4fc08d;
    color: #fff;
}

/* 右边 部分 */
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
</style>


