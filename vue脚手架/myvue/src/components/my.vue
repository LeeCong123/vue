<template>
    <div id='app'>
        <aaa :leve='1'>sssss</aaa>
        <aaa :leve='2'>sssss</aaa>
        <aaa :leve='3'>sssss</aaa>

    </div>
</template>
<script>
// import hee from './HelloWorld.vue'
import aaa from '../aaa.vue'
export default {
    name:'my',//当前Vue组件名字
    components:{ //需要引用其他组件的名字
        aaa,
        // hee
    },

   

    
}
</script>

<style scoped>
   #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* font-size: 40px; */
} 
</style>