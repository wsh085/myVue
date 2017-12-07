<template>
    <div class="home">
        <div class="home-left">
            <div class="home-left-top">
                <h3 class="home-title">全部产品</h3>
                <h3 class="home-title-little">{{productList.PC.title}}</h3>
                <ul class="home-left-top-block">
                    <li v-for="item in productList.PC.list">
                        <a :href="item.url">{{item.text}}</a>
                        <span v-show="item.saleHot" class="home-hot">HOT</span>
                    </li>
                </ul>
                <hr/>
                <h3 class="home-title-little">{{productList.app.title}}</h3>
                <ul class="home-left-top-block">
                    <li v-for="item in productList.app.list">
                        <a :href="item.url">{{item.text}}</a>
                        <span v-show="item.saleHot" class="home-hot">HOT</span>
                    </li>
                </ul>
            </div>
            <div class="home-left-bottom">
                <h3 class="home-title">最新消息</h3>
                <ul class="home-left-bottom-block">
                    <li v-for="item in newsList">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="home-right">
            <div class="home-right-top">
                <silde-show :sliders="sliders">

                </silde-show>
                 <!-- <slider animation="fade">
                    <slider-item v-for="(i, index) in list" :key="index">
                        <div :style="i">
                        <img :src="i.image">
                        </div>
                    </slider-item>
                </slider> -->
            </div>
            <div class="home-right-bottom">
                <div v-for="item in boardList" class="home-right-bottom-blockLeft">
                    <div class="home-right-bottom-block-left">
                        <img v-bind:src="item.image">
                    </div>
                    <ul class="home-right-bottom-block-right">
                        <li class="li-1">{{item.title}}</li>
                        <li class="li-2">{{item.description}}</li>
                        <li class="li-3"><button>立即购买</button></li>
                    </ul>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
import sildeShow from "@/components/slideShow"

import img_1 from "../assets/images/1.png"
import img_2 from "../assets/images/2.png"
import img_3 from "../assets/images/3.png"
import img_4 from "../assets/images/4.png"
import slider_1 from "../assets/slideShow/pic1.jpg"
import slider_2 from "../assets/slideShow/pic2.jpg"
import slider_3 from "../assets/slideShow/pic3.jpg"
import slider_4 from "../assets/slideShow/pic4.jpg"

import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    components: {
        // sildeShow,
        Slider,
        SliderItem,
        sildeShow
    },
    data(){
      return{
          sliders:[
              {
                 image:slider_1,
                 text:"这是第一张图" 
              },
              {
                 image:slider_2,
                 text:"这是第二张图" 
              },
              {
                 image:slider_3,
                 text:"这是第三张图" 
              },{
                 image:slider_4,
                 text:"这是第四张图" 
              }
          ],
          list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%',image:slider_1 },
        { backgroundColor: '#eee', width: '100%', height: '100%',image:slider_2 },
        { backgroundColor: '#f44336', width: '100%', height: '100%',image:slider_3 },
      ],
          productList:{
              PC:{
                  title:'PC产品',
                  list:[
                      {
                        text:'数据统计',
                        saleHot:true,
                        url:'https://www.baidu.com/'
                      },
                      {
                        text:'数据预测',
                        saleHot:false,
                        url:'https://www.baidu.com/'
                      },
                      {
                        text:'流量分析',
                        saleHot:false,
                        url:'https://www.baidu.com/'
                      },
                      {
                        text:'广告发布',
                        saleHot:false,
                        url:'https://www.baidu.com/'
                      }
                  ]
              },
              app:{
                  title:'手机应用类',
                  list:[
                      {
                          text:'91助手',
                          saleHot:false,
                          url:'https://www.baidu.com/'
                      },
                      {
                          text:'产品助手',
                          saleHot:true,
                          url:'https://www.baidu.com/'
                      },
                      {
                          text:'智能地图',
                          saleHot:false,
                          url:'https://www.baidu.com/'
                      },
                      {
                          text:'团队语音',
                          saleHot:false,
                          url:'https://www.baidu.com/'
                      },
                  ]
              }
          },
          newsList:[
              {
                  title:'新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
              },
              {
                  title:'新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
              },
              {
                  title:'新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
              },
              {
                  title:'新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
              },
              {
                  title:'新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
              }
          ],
          boardList: [
            {
                image:img_1,
                title: '开放产品',
                description: '开放产品是一款开放产品',
                id: 'car',
                toKey: 'analysis',
                saleHot: false
            },
            {
                image:img_2,
                title: '品牌营销',
                description: '品牌营销帮助你的产品更',
                id: 'earth',
                toKey: 'count',
                saleHot: false
            },
            {
                image:img_3,
                title: '使命必达',
                description: '使命必达快速迭代永远保',
                id: 'loud',
                toKey: 'forecast',
                saleHot: true
            },
            {
                image:img_4,
                title: '勇攀高峰',
                description: '帮你勇闯高峰，到达事业',
                id: 'hill',
                toKey: 'publish',
                saleHot: false
            }
          ],
      }
  },
  computed: {
      oddBoardList:function(){
          return this.boardList.filter(function(element,index){
              if(index%2 == 0)
                return element;
          })
      },
      evenBoardList:function(){
          return this.boardList.filter(function(element,index){
              if(index%2 != 0)
                return element;
          })
      }
  }
}
</script>


<style scoped>
/* 共用样式 */
.home{
    background-color: #f0f2f5;
}
.home-title{
    color:#FFFFFF;
    background-color:#4fc08d;
    padding:10px 15px;
    margin-bottom:20px;
}
.home-title-little{
    color:#000000;
    padding:0 15px;
    margin-bottom:10px;
    font-weight: bold;
}
.home-hot{
    background-color:red;
    color:#FFFFFF;
    margin-left:5px;
}
.home-right-bottom-block-left{
    float: left;
}
.home-right-bottom-block-right{
    float: left;
    padding-left:20px;
}
.home-right-bottom-block-right li{
    list-style: none; 
    cursor: pointer;
}
.home-right-bottom-block-right .li-1{
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
}
.home-right-bottom-block-right .li-2{
    text-overflow:ellipsis;
}
.home-right-bottom-block-right .li-3 button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    margin-top:15px;
    border:0px solid #FFFFFF;
}
/* 左边部分 上部*/
.home-left{
    float: left;
    width:300px;
    text-align: left;
}
.home-left .home-left-top{
    background-color:#FFFFFF;
    margin:15px;
    box-shadow: 0 0 1px #ddd;/*盒子阴影*/
}
.home-left .home-left-top .home-left-top-block{
    padding:10px 15px;
    padding-bottom:0;
}
.home-left .home-left-top .home-left-top-block li{
    padding:5px 5px;
    list-style: none;
    cursor:pointer;
}
.home-left .home-left-top .home-left-top-block li a{
    color:#222;
    text-decoration:none;
}
/* 左边部分 下部 */
.home-left .home-left-bottom{
    background-color:#FFFFFF;
    margin:15px;
    box-shadow: 0 0 1px #ddd;/*盒子阴影*/
    min-height: 412px;
}
.home-left .home-left-bottom .home-left-bottom-block{
    padding:5px 15px;
    padding-bottom:0;
}
.home-left .home-left-bottom .home-left-bottom-block li{
    padding:5px 5px;
    list-style: none; 
}

/* 右边  上部 */
.home-right{
    float: left;
    width:900px;
    height:500px;
}
.home-right .home-right-top{
    /* margin:15px; */
    margin-top:15px;
    margin-bottom:15px;
    width:100%;
    height:100%;
}
/* 右边 下部 */
.home-right-bottom{

}
.home-right-bottom-blockLeft{
    float: left;
    width: 430px;
    background-color: #ffffff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    /* margin-left:15px; */
    margin-right: 20px;
    margin-bottom: 20px;
}
.home-right-bottom-blockLeft:nth-child(2n){
    margin-right:0;
    margin-left:15px;
}

.home-right-bottom-top .home-right-bottom-blockLeft{
    padding:10px 15px;
}


</style>