<!--
  Usage: <RegularButton [options]>[text]</RegularButton>

  Options:
    color="[color]"
      - specifies the color of the button
      - where color is any material color without the 'md-' prefix
      - Type: String
      - Example: color="primary"

    raised
      - makes a visible background for he button and adds a shadow
      - Type: Boolean
      - Default: False

    dense
      - makes a the button more compact
      - Type: Boolean
      - Default: False

    noRipple
      - removes the ripple animation upon button click
      - Type: Boolean
      - Default: False

    icon
      - makes the button circular
      - cannot be used together with a fab (detailed below)
      - smaller than a fab
      - Type: Boolean
      - Default: False

    fab
      - makes the button circular
      - cannot be used together with an icon (detailed above)
      - larger than an icon
      - standard dictates this is only used once for the main action of the page
      - Type: Boolean
      - Default: False
      fabLocation='[location]'
        - can only be used with a fab
        - specifies the absolute position of the fab
        - where location is any fab location without the 'md-fab-' prefix
        - Type: String
        - Example: fabLocation="bottom-right"
 -->

<template>
    <md-button
      :class="['md-' + color, raised ? 'md-raised':'', dense ? 'md-dense':'', icon ? 'md-icon-button':'', fab ? 'md-fab':'', 'md-fab-' + fabLocation]"
      :disabled="disabled"
      :md-ripple="!noRipple">
      <slot></slot>
    </md-button>
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
      icon: Boolean,
      disabled: Boolean,
      noRipple: Boolean,
      fab: Boolean,
      fabLocation: String
    }
  }
</script>
