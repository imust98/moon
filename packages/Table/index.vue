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
