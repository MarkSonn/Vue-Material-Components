<template>
  <!-- Add support for md-theme -->
  <md-card
    :class="[color ? 'md-' + color:'']"
    :id="size"
    :md-with-hover="hover">

    <!-- <md-card-media-cover> -->
      <!-- <md-card-media md-ratio="16:9">
        <img :src="image" alt="People">
      </md-card-media> -->

    <!-- Add support for md-card-media-actions -->
    <!-- <md-card-media-actions> -->
    <md-card-area>
      <div :is="ripple ? 'md-ripple' : 'div'">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title"><slot name="title"></slot></div>
            <div class="md-subhead"><slot name="subtitle"></slot></div>
          </md-card-header-text>

          <!-- TODO: add sizes (md-small, md-medium, md-big) -->
          <!-- TODO: change image from prop to named-slot -->
          <md-card-media v-if="image">
            <img :src="image" alt="People">
          </md-card-media>
        </md-card-header>

        <md-card-content>
            <slot>Default: title, subtitle, success, faliure</slot>
        </md-card-content>

        <!-- TODO: remove this section if there are no actions -->
        <!-- TODO: add ability to have more than two buttons -->
        <md-card-actions>
          <slot name="failure"></slot>
          <slot name="success"></slot>
        </md-card-actions>

      </div>
    </md-card-area>

    <!-- </md-card-media-actions> -->

    <!-- </md-card-media-cover> -->

  </md-card>
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
    color: String,
    size: String,
    hover: Boolean,
    ripple: Boolean,
    image: String
  }
}
</script>
