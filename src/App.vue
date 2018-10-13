<template>
  <div id="app">

    <Table :headings="tableHeadings" :tableData="tableData">
      <template slot="title">My Title</template>
    </Table>

    <RegularCard size="small" image="https://vuematerial.io/assets/examples/card-sky.jpg">
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
  console.log(`Components = ${JSON.stringify(Components)}`)
  export default {
    name: 'App',
    components,
    data() {
      return {
        tableHeadings: [
          {heading: "id", type: "numeric"},
          {heading: "Name", type: "text"},
          {heading: "Email", type: "text"},
          {heading: "Gender", type: "text"},
          {heading: "Job Title", type: "text"}
        ],
        tableData: [
          [
            {item: 1, type: "numeric"},
            {item: 'Shawna', type: "text"},
            {item: 'sdubbin0@geocities.com', type: "text"},
            {item: 'Male', type: "text"},
            {item: 'Assistant Media Planner', type: "text"}
          ],
          [
            {item: 2, type: "numeric"},
            {item: 'Mark', type: "text"},
            {item: 'marksonn5@gmail.com', type: "text"},
            {item: 'Male', type: "text"},
            {item: 'Computer Scientist', type: "text"}
          ]
        ]
      }
    }
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
