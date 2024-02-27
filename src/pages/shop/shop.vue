<template>
  <nut-searchbar v-model="val" placeholder="请输入搜索关键字">
    <template #leftin>
      <Search2 />
    </template>
  </nut-searchbar>
  <nut-row :gutter="10">
    <nut-col :span="4">
      <div class="content">综合</div>
    </nut-col>
    <nut-col :span="4">
      <div class="content light">销量</div>
    </nut-col>
    <nut-col :span="4">
      <div class="content">价格</div>
    </nut-col>
    <nut-col :span="4">
      <div class="content light">新品</div>
    </nut-col> 
    <nut-col :span="4">
      <div class="content light">|</div>
    </nut-col> 
    <nut-col :span="4">
      <div class="content">筛选</div>
    </nut-col>
  </nut-row>
  
</template>

<script setup>
import { ref } from 'vue';
import { Search2, Left, Photograph, Message } from '@nutui/icons-vue-taro';
const val = ref('');

</script>

<style lang="scss">
.content {
  line-height: 40px;
  color: rgb(51, 51, 51);
  text-align: center;
  border-radius: 6px;
  background: #fff;
  margin-bottom: 10px;
}
.light {
  background: #ffc7c4;
  
}
.list{
  margin-top:10px
}

</style>
