<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  }
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
.ju {
  display: flex;
  justify-content: center;
}
.al {
  display: flex;
  align-items:center;
}
.sb {
  display: flex;
  justify-content: space-between;
}
.sa {
  display: flex;
  justify-content: space-around;
}
.editBtn {
  background:#C4C4C4 !important;
  color: black !important;
  margin-right: 3px;
}
th {
  background: #5F98EC !important;
  color: white;
}
.addBtn {
  background: #5F98EC !important;
  border: none !important;
  opacity: 1;
  margin-bottom: 10px !important;
}
.addBtn:hover {
  opacity: 0.8;
}
</style>
