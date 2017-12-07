<template>
  <div class="slide-show" @mouseover="clearTime()" @mouseout="setTime()">
    <div class="slide-img">
      <transition name="current">
        <img v-if="isShow" :src="sliders[nowIndex].image">
      </transition>
      <transition name="future">
        <img v-if="!isShow" :src="sliders[nowIndex].image">
      </transition>
    </div>
    <h2>{{sliders[nowIndex].text}}</h2>
    <ul class="slide-pages">
      <li @click="goto(goPrev)">&lt;</li>
      <li :class="{on:(index === nowIndex)}" v-for="(item,index) in sliders" @click="goto(index)">
        {{index+1}}
      </li>
      <li @click="goto(goLast)">&gt;</li>
    </ul>

  </div>
</template>

<script>
import slider_1 from "../assets/slideShow/pic1.jpg"
export default {
  props:{
    sliders:{
      type:Array,
      default:[]
    },
    inv:{
      type:Number,
      default:2000
    }
  },
  data(){
    return {
      nowIndex:0,
      isShow:true,
      timer:{}
    }
  },
  computed:{
    goPrev(){
      if(this.nowIndex == 0)
        return this.sliders.length - 1;
      else
        return this.nowIndex - 1;
    },
    goLast(){
      if(this.nowIndex === (this.sliders.length -1))
        return 0;
      else
        return this.nowIndex + 1;
    }
  },
  methods:{
    goto(index){
      this.isShow = false;
      setTimeout(()=>{
        this.isShow = true;
        this.nowIndex = index;
      },10);
    },
    setTime(){
      this.timer = setInterval(()=>{
        this.goto(this.goLast);
      },this.inv)
    },
    clearTime(){
      clearInterval(this.timer);
    }
  },
  mounted () {
    this.setTime();
  }
}
</script>
<style>
.current-enter-active{
  transition: all 0.5s;
}
.current-enter{
  transform: translateX(100%);
}
.future-leave-active{
  transition: all .5s;
  transform: translateX(-100%);
}
.slide-show{
  position :relative;
  margin:15px 15px 15px 0;
  width:100%;
  height: 100%;
  overflow: hidden;

}
.slide-show h2{
  position:absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom:0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left:15px;
}
.slide-show .slide-img{
  width:100%;
}
.slide-show .slide-img img{
  width:100%;
  position: absolute;
  top:0;
}
.slide-pages {
  position: absolute;
  bottom: 5px;
  right: 15px;
}
.slide-pages ul{
  height: 30px;
  line-height: 30px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  border:1px solid #FFFFFF;
}
.slide-pages .on {
  /* text-decoration: underline; */
  background-color:blue;
}
</style>

