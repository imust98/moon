<template>
<div class="mo-table" :class="className">
    <div class="table-header">
      <table>
        <slot name="header"></slot>
      </table>
    </div>
    <div v-if="sourcelist && sourcelist.length" class="table-body">
      <table>
        <tr v-for="(item, index) in sourcelist" :key="index">
          <slot name="body" v-bind:item="item"   v-bind:$index="index"></slot>
        </tr>
      </table>
    </div>
    <div v-else class="table-empty">
      <slot name="empty">{{emptyText}}</slot>
    </div>
</div>
</template>
<script>
export default {
  name: 'Table',
  props: {
    className: {
      type: String
    },
    sourcelist: {
      default: []
    },
    emptyText: {
      type: String,
      default: '没有数据'
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
    styles() {
      return [];
    }
  },
  methods: {
    // todo
  },
  mounted() {
    // todo
  }
};
</script>
<style lang='scss'>
.mo-table {
  position: relative;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  font-size: 14px;
  color: $text-color;
  background-color: $text-white-color;
  table {
    width: 100%;
    table-layout: fixed;
  }
  thead {
    color: $title-color;
    font-weight: 500;
  }

  th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
  }
  th,
  td {
    position: relative;
    padding: 12px 10px;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    border-bottom: 1px solid $border-base-color;
  }
  tr {
    &:hover {
      background-color: $table-background-hover;
    }
  }
  .table-empty {
    padding: 15px 0;
    text-align: center;
  }
}
</style>
