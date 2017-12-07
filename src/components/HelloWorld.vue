<template id="test">
  <div v-if="isShow" class="hello">
    <h1>{{ msg|filterFun }}</h1>
    <ul>
    <h2 v-on:click="addCount">Essential Links</h2>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <my-component></my-component>
  </div>
</template>
<script type="es6">
import Vue from 'vue';
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow:true,
      timer:""
    }
  },
  filters:{
    filterFun:function(value){
        return value.split(" ")[0];
    }
  },
  computed: {
    msgComputed:function(){
      return this.msg.split("")[0];
    }
  },
  methods: {
    addCount:function(){
      var _this = this;

      this.timer = setInterval(function(){
        _this.msg = _this.msg + "hahahhaha"
      },1000)
      // return this.msg+"World";
    }
  },
  watch: {
    msg:function(){
      // console.log("watch:"+this.msg);
    }
  },
  updated () {
    console.log("updated:"+this.msg);
  }
}


var childComponent = {
  template:"<div>哈哈哈哈哈哈</div>"
}
Vue.component('my-component',childComponent);

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
} 
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
