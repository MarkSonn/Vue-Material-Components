<template>
    <md-button :class="[color, raised ? 'md-raised':'', dense ? 'md-dense':'']" :disabled="disabled" :md-ripple="!noRipple"><slot></slot></md-button>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
  export default {
    name: 'RegularButton',
    props: {
      color: String,
      raised: Boolean,
      dense: Boolean,
      disabled: Boolean,
      noRipple: Boolean
    }
  }
</script>
