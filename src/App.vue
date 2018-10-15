<template>
  <div id="app">

    <Navbar indent elevation="24" color="primary" >
      <template slot="title">Vue Material</template>
      <Button>Refresh</Button>
      <Button>Refresh</Button>
      <Button>Refresh</Button>
      <Button>Refresh</Button>
      <Button raised class="spacing" color="accent">Refresh</Button>
      <Button raised class="spacing" color="accent">Create</Button>
    </Navbar>

    <!-- <Table :headings="headers" :tableData="users" card fixedHeader>
      <template slot="title">My Title</template>
    </Table> -->

    <!-- <RegularCard size="small" image="https://vuematerial.io/assets/examples/card-sky.jpg">
      <template slot="title">Awesome Card</template>
      <template slot="subtitle">With so much functionality</template>
      <Button slot="failure">Lol</Button>
      <Button slot="success">Ha</Button>
    </RegularCard>

    <Button color="primary" raised fab>Lol</Button>
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
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
