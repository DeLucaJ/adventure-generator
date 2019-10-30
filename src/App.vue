<template>
  <div id="app">
    <AppHeader/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

@Component ({
  components: {
    AppHeader, AppFooter
  }
})
export default class App extends Vue {

}
</script>

<style>

</style>