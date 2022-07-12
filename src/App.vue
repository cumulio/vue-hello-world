<template>
  <div>
    <cumulio-dashboard dashboardId="DASHBOARD_ID_HERE" :authKey="key" :authToken="token"></cumulio-dashboard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      key: null,
      token: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      const auth = await fetch('http://localhost:4001').then(response => response.json()).catch(err => console.log(err));
      this.key = auth.key;
      this.token = auth.token;
    }
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
