<template>
  <md-table
    v-model="tableData"
    md-sort="id"
    md-sort-order="desc"
    :md-card="card"
    :md-fixed-header="fixedHeader">
    <md-table-toolbar>
      <h1 class="md-title"><slot name="title"></slot></h1>
    </md-table-toolbar>

    <!-- Pass in headers as an array of objects mapping label, sort-by and type -->
    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell
        v-for="heading in headings"
        :md-label="heading.label"
        :md-sort-by="heading.sort"
        :md-numeric="heading.type == 'numeric'"
        :class="heading.type == 'text' ? 'left':''">
        {{ item[heading.sort] }}
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<style lang="scss" scoped>
  .left {
    text-align: left;
  }
</style>

<script>
  export default {
    name: 'Table',
    props: {
      headings: Array,
      tableData: Array,
      card: Boolean,
      fixedHeader: Boolean
    }
  }
</script>
