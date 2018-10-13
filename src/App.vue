<template>
  <div id="app">
    <RegularCard size="medium"></RegularCard>
    <RegularButton color="primary" fab fabLocation="bottom-right" raised dense>Lol</RegularButton>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import * as components from '@/components'
  console.log(`Components = ${Components}`);
  export default {
    name: 'App',
    components
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
