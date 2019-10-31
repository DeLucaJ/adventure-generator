<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter style="bottom: 0"/>
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
html, body {
  height: 100%;
}

.page {
  padding: 15px;
}
</style>