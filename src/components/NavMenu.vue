<template>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class NavMenu extends Vue {
  get editing(): boolean {
    return this.$route.path === "/editor";
  }

  select() {
    // this will set the element based on editing()
    if (this.editing) {
      // set current editor to selected
    }
    else {
      // set current viewing to selected
    }
  }
}
</script>