<template>
  <div v-if="isShow" class="dialog-wrap">
      <div class="dialog-cover"></div>
      <transition name="drop">
        <div v-if="isShow" class="dialog-content">
            <p class="dialog-close" @click="closeMyself">x</p>
            <slot>empty</slot>
        </div>
      </transition>     
  </div>
</template>

<script>
export default {
  props:{
      isShow:{
          type:Boolean,
          default:false
      }
  },
  data(){
      return {

      }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>
<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-20%);
}
.drop-leave-active {
  transform: translateY(80%);
}

.dialog-wrap{
    position: fixed;
    width:100%;
    height:100%;
}
.dialog-wrap .dialog-cover{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#000;
    opacity: 3;
    z-index: 5;
}
.dialog-wrap .dialog-content{
    position: fixed;
    width:50%;
    max-height:50%;
    overflow: auto;
    z-index: 10;
    background: #fff;
    top:20%;
    left:50%;
    margin-left: -25%;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
}
.dialog-wrap .dialog-content .dialog-close{
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}
.dialog-wrap .dialog-content .dialog-close:hover{
    color: #4fc08d;
}
</style>


