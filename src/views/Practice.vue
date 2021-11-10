<template>
  <div>
    <div class="myscss">标签 1</div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <div class="png">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
}
</script>

<style lang="scss" scoped>
  $color:#233;
  .myscss{
    color: $color;
    width: 750px;
    height: 100px;
    font-size: 14px;
    background-color: aqua;
  }
  .png{
    div{
      height: 800px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    div:first-of-type{
      background-image: url(../assets/1.png);     
    }
    div:nth-of-type(2){
      background-image: url(../assets/1@2x.png);     
    }
    div:last-of-type{
      height: 400px;
      background-image: url(../assets/1@2x.png);     
    }
  }
  
</style>