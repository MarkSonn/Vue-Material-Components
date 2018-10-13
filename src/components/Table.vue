<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title"><slot name="title"></slot></h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head :md-numeric="heading.type == 'numeric'" v-for="heading in headings" :key='heading.heading'>{{ heading.heading }}</md-table-head>
      </md-table-row>

      <md-table-row v-for="row in tableData" :key="row.id">
        <md-table-cell
          :md-numeric="field.type == 'numeric'"
          :class="field.type != 'numeric' ? 'left':''"
          v-for="field in row"
          :key="field.item">
            {{ field.item }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
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
      tableData: Array
      // color: String,
      // raised: Boolean,
      // dense: Boolean,
      // icon: Boolean,
      // disabled: Boolean,
      // noRipple: Boolean,
      // fab: Boolean,
      // fabLocation: String,
      // to: String,
      // href: String
    }
  }
</script>
