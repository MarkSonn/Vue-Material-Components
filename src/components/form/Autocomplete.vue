<template>
    <!-- Implement md-input-max-length -->
    <md-autocomplete
      v-model="selectedField"
      :md-options="model"
      :md-open-on-focus="list"
      :md-layout="box ? 'box':''"
      :md-fuzzy-search="fuzzy"
      :md-dense="dense">
      <label><slot></slot></label>

      <template :slot="highlight ? 'md-autocomplete-item':''" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No countries matching "{{ term }}" were found. <a @click="noop()">Create a new</a> one!
      </template>
    </md-autocomplete>
</template>

<style lang="scss" scoped>
</style>

<script>
  export default {
    name: 'Autocomplete',
    props: {
      model: Array,
      list: Boolean,
      dense: Boolean,
      box: Boolean,
      fuzzy: Boolean,
      highlight: Boolean

      // color: String,
      // size: String,
      // indent: Boolean,
      // elevation: String
    },
    data: () => ({
      selectedField: null,
      countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ],
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    }),
    methods: {
      noop () {
        window.alert('To Do...')
      }
    }
  }
</script>
