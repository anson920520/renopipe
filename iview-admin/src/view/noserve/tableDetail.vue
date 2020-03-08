<template>
  <div class="tabledetail">
    <Row class="expand-row">
      <Col span="8" class="coll">
        <span class="expand-key">创建时间： </span>
        <span class="expand-value">{{ row.time }}</span>
      </Col>
       <Col span="8" class="coll">
        <span class="expand-key">城市: 深圳</span>
        <span class="expand-value">{{ row.province }}{{ row.city }}</span>
      </Col>
      <Col span="8" class="coll">
        <span class="expand-key">详细地址: 广东省深圳市龙岗</span>
        <span class="expand-value">{{ row.address }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
      name: "tableDetail",
      props: {
        row: Object
      }
    }
</script>

<style scoped>
  .tabledetail{
    height: auto;
  }
  .coll{
    width: 30%;
    margin-right: 10px;
  }
  .expand-row{
    margin-bottom: 10px;
  }
  .expand-key{
    font-weight: bolder;
  }
  .expand-value{
    margin-right: 10px;
  }
  img{
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
</style>
