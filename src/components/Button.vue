<!--
  Usage: <Button [options]>[text]</Button>

  Options:
    color="[color]"
      - specifies the color of the button
      - where color is any material color without the 'md-' prefix
      - Type: String
      - Example: color="primary"

    raised
      - makes a visible background for the button and adds a shadow
      - Type: Boolean
      - Default: False

    dense
      - makes a the button more compact
      - Type: Boolean
      - Default: False

    disabled
      - greys out the button and makes it unresponsive to clicks
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

    to="[path]"
      - this is not the same as href (detailed below)
      - specifies an internal path for router-link to redirect to
      - Type: String
      - Example: to="./example"

    href="[path]"
      - this is not the same as to (detailed above)
      - specifies an external path for to redirect to
      - Type: String
      - Example: href="https://www.google.com"
 -->

<template>
    <md-button
      :class="[color ? 'md-' + color:'', raised ? 'md-raised':'', dense ? 'md-dense':'', icon ? 'md-icon-button':'', fab ? 'md-fab':'', fabLocation ? 'md-fab-' + fabLocation:'']"
      :disabled="disabled"
      :md-ripple="!noRipple"
      :to="to"
      :href="href">
      <slot></slot>
    </md-button>
</template>

<style lang="scss" scoped>
  Button {
    margin: 0;
  }
  .spacing {
    margin: 0 10px;
  }
</style>

<script>
  export default {
    name: 'Button',
    props: {
      color: String,
      raised: Boolean,
      dense: Boolean,
      icon: Boolean,
      disabled: Boolean,
      noRipple: Boolean,
      fab: Boolean,
      fabLocation: String,
      to: String,
      href: String
    }
  }
</script>
