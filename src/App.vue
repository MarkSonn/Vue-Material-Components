<template>
  <div id="app">

    <Navbar indent elevation="24" color="primary">
      <template slot="title">Vue Material</template>
      <Autocomplete :model="employees" box>Lol...</Autocomplete>

      <!-- <Button>Home</Button>
      <Button>About</Button>
      <Button>FAQs</Button>
      <Button>Contact</Button> -->
      <Button raised class="spacing" color="accent">Login</Button>
      <Button raised class="spacing" color="accent">Signup</Button>
    </Navbar>

    <div class="container">
      <Autocomplete highlight list :model="employees">Employees</Autocomplete>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <!-- <Table :headings="headers" :tableData="users" card fixedHeader>
        <template slot="title">My Title</template>
      </Table> -->
    </div>


    <!-- <Table :headings="headers" :tableData="users" card fixedHeader>
      <template slot="title">My Title</template>
    </Table> -->


    <RegularCard size="small" image="https://vuematerial.io/assets/examples/card-sky.jpg">
      <template slot="title">Awesome Card</template>
      <template slot="subtitle">With so much functionality</template>
      <Button slot="failure">Lol</Button>
      <Button slot="success">Ha</Button>
    </RegularCard>

    <!-- <Button color="primary" raised >Lol</Button> -->
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
        ],
        headers: [
          {label: "ID", sort: "id", type: "numeric"},
          {label: "Name", sort: "name", type: "text"},
          {label: "Email", sort: "email", type: "text"},
          {label: "Gender", sort: "gender", type: "text"},
          {label: "Title", sort: "title", type: "text"}
        ],
        users: [
          {
            id: 1,
            name: "Shawna Dubbin",
            email: "sdubbin0@geocities.com",
            gender: "Male",
            title: "Assistant Media Planner"
          },
          {
            id: 2,
            name: "Odette Demageard",
            email: "odemageard1@spotify.com",
            gender: "Female",
            title: "Account Coordinator"
          },
          {
            id: 3,
            name: "Vera Taleworth",
            email: "vtaleworth2@google.ca",
            gender: "Male",
            title: "Community Outreach Specialist"
          },
          {
            id: 4,
            name: "Lonnie Izkovitz",
            email: "lizkovitz3@youtu.be",
            gender: "Female",
            title: "Operator"
          },
          {
            id: 5,
            name: "Thatcher Stave",
            email: "tstave4@reference.com",
            gender: "Male",
            title: "Software Test Engineer III"
          },
          {
            id: 6,
            name: "Karim Chipping",
            email: "kchipping5@scribd.com",
            gender: "Female",
            title: "Safety Technician II"
          },
          {
            id: 7,
            name: "Helge Holyard",
            email: "hholyard6@howstuffworks.com",
            gender: "Female",
            title: "Internal Auditor"
          },
          {
            id: 8,
            name: "Rod Titterton",
            email: "rtitterton7@nydailynews.com",
            gender: "Male",
            title: "Technical Writer"
          },
          {
            id: 9,
            name: "Gawen Applewhite",
            email: "gapplewhite8@reverbnation.com",
            gender: "Female",
            title: "GIS Technical Architect"
          },
          {
            id: 10,
            name: "Nero Mulgrew",
            email: "nmulgrew9@plala.or.jp",
            gender: "Female",
            title: "Staff Scientist"
          },
          {
            id: 11,
            name: "Cybill Rimington",
            email: "crimingtona@usnews.com",
            gender: "Female",
            title: "Assistant Professor"
          },
          {
            id: 12,
            name: "Maureene Eggleson",
            email: "megglesonb@elpais.com",
            gender: "Male",
            title: "Recruiting Manager"
          },
          {
            id: 13,
            name: "Cortney Caulket",
            email: "ccaulketc@cbsnews.com",
            gender: "Male",
            title: "Safety Technician IV"
          },
          {
            id: 14,
            name: "Selig Swynfen",
            email: "sswynfend@cpanel.net",
            gender: "Female",
            title: "Environmental Specialist"
          },
          {
            id: 15,
            name: "Ingar Raggles",
            email: "iragglese@cbc.ca",
            gender: "Female",
            title: "VP Sales"
          },
          {
            id: 16,
            name: "Karmen Mines",
            email: "kminesf@topsy.com",
            gender: "Male",
            title: "Administrative Officer"
          },
          {
            id: 17,
            name: "Salome Judron",
            email: "sjudrong@jigsy.com",
            gender: "Male",
            title: "Staff Scientist"
          },
          {
            id: 18,
            name: "Clarinda Marieton",
            email: "cmarietonh@theatlantic.com",
            gender: "Male",
            title: "Paralegal"
          },
          {
            id: 19,
            name: "Paxon Lotterington",
            email: "plotteringtoni@netvibes.com",
            gender: "Female",
            title: "Marketing Assistant"
          },
          {
            id: 20,
            name: "Maura Thoms",
            email: "mthomsj@webeden.co.uk",
            gender: "Male",
            title: "Actuary"
          }
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
    /* margin-top: 60px; */
  }

  .container {
    margin-top: 40px;
    width: 80%;
    display: inline-block;
  }

  Autocomplete, md-autocomplete {
    padding: 0;
    margin: 0;
  }
</style>
