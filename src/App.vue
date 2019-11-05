<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
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

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.page {
  padding: 15px;
}

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>