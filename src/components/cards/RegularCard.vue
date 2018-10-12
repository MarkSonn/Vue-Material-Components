<template>
  <div>
    <md-card :id="size">
      <md-card-header>
        <div class="md-title"><slot name="title"></slot></div>
        <div class="md-subhead"><slot name="subtitle"></slot></div>
      </md-card-header>

      <md-card-content>
          <slot>Default: title, subtitle, success, faliure</slot>
      </md-card-content>

      <md-card-actions>
        <slot name="faliure"></slot>
        <slot name="success"></slot>
      </md-card-actions>
    </md-card>

  </div>
</template>

<style lang="scss" scoped>
  #small {
    width: 320px;
  }
  #medium {
    width: 600px;
  }
  #large {
    width: 100%;
  }
  .md-card {
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'RegularCard',
  props: {
    size: String
  }
}
</script>
