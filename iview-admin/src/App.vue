<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
  min-width: 1310px; 
}
html,body{
  .size;
  // overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
// .Form {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-end;
//   padding-right: 30px;
// }
.formItemWrap {
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  align-items: center;
  margin: 20px auto;
}

</style>
