<template>
  <!-- Start, slot, end section -->
  <md-toolbar
    :class="[color ? 'md-' + color:'', size ? 'md-' + size:'', dense ? 'md-dense':'']"
    :md-elevation="elevation ? elevation:0"
    >

    <div :class="['md-toolbar-section-start', indent ? 'md-toolbar-offset':'']">
        <h3 class="md-title"><slot name="title"></slot></h3>
    </div>

    <div class="links md-toolbar-section-end" style="flex: 1">
      <slot></slot>
    </div>

  </md-toolbar>
</template>

<style lang="scss" scoped>
</style>

<script>
  export default {
    name: 'Navbar',
    props: {
      color: String,
      size: String,
      dense: Boolean,
      indent: Boolean,
      elevation: String
    }
  }
</script>
