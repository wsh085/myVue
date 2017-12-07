<template>
  <div class="orderList">
      <h3>您的产品</h3>
      <div class="order-list-choose">
          <div class="order-list-option">
              选择产品：
              <select name="" id="">
                  <option class="select-show" value="">数据统计</option>
                  <option value="">数据预测</option>
                  <option value="">流量分析</option>
                  <option value="">广告发布</option>
              </select>
          </div>
          <div class="order-list-option">
              开始日期：
              <input type="text" />
          </div>
          <div class="order-list-option">
              结束日期：
              <input type="text" />
          </div>
          <div class="order-list-option">
              关键词：
              <input type="text" />
          </div>
      </div>
      <div class="order-list-table">
          <table>
              <tbody>
                  <tr>
                      <td>订单号</td>
                      <td>购买产品</td>
                      <td>版本类型</td>
                      <td>有效时间</td>
                      <td>购买日期</td>
                      <td>数量</td>
                      <td>总价</td>
                  </tr>
                  <tr>
                      <td>ddj123</td>
                      <td>数据统计</td>
                      <td>高级版</td>
                      <td>1年</td>
                      <td>2016-10-10</td>
                      <td>2</td>
                      <td>500元</td>
                  </tr>
                  <tr>
                      <td>yuj583</td>
                      <td>流量分析</td>
                      <td>户外版</td>
                      <td>3个月</td>
                      <td>2016-5-2</td>
                      <td>1</td>
                      <td>2200元</td>
                  </tr>
                  <tr>
                      <td>pmd201</td>
                      <td>广告发布</td>
                      <td>商铺版</td>
                      <td>3年</td>
                      <td>2016-8-3</td>
                      <td>12</td>
                      <td>7890元</td>
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
.orderList{
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
}
.orderList h3{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
/* 选择 */
.orderList .order-list-choose{

}
.orderList .order-list-choose .order-list-option{
    display: inline-block;
    padding-left: 15px;
}
.orderList .order-list-choose .order-list-option:first-child{
    padding-left:0;
}
.orderList .order-list-choose .order-list-option .select-show{
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
/* 表格 */
.orderList .order-list-table{
    margin-top: 20px;
    width: 100%;
    background: #fff;
    border-collapse: collapse;
    border-spacing: 0;
}
.orderList .order-list-table table{
    width:100%;
}
.orderList .order-list-table tr td{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
}
.orderList .order-list-table tr:nth-child(1) td{
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
}
</style>


