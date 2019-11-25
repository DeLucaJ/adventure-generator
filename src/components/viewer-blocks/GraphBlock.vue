<template>
  <section class="section">
    <div class="container">
      <div id="draw-window"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Graph from "@/generators/graph";
import Two from "twojs-ts";

@Component
export default class GraphBlock extends Vue {
  @Prop()
  graph!: Graph;

  mounted() {
    const element = document.getElementById("draw-window");
    const params = { width: 500, height: 500 };
    const two = new Two(params).appendTo(element as HTMLElement);

    two.update();
  }
}
</script>

<style lang="scss">
#draw-window {
  border: 1px solid;
}
</style>