<template>
  <div>
<mo-table :sourcelist="sourcelist" classes="m-table-offline">
        <template slot="header">
          <tr>
            <td>任务名称</td>
            <td>所属应用</td>
            <td>接收邮箱</td>
            <td>提交时间</td>
            <td>执行SQL</td>
            <td>执行状态</td>
            <td>执行耗时</td>            
            <td>操作</td>
          </tr>
        </template>
        <template slot-scope="props" slot="body">
          <div></div> 
        </template>
      </mo-table>
  </div>
</template>
<script>
import Vue from 'vue';
import MoTable from './index.vue';
export default {
  components: {
    MoTable: MoTable
  },
  data(){
    return {
    sourcelist:[]
    }
  }
};
</script>
