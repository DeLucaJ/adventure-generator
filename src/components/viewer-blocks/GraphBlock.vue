<template>
  <section class="section">
    <div class="container">
      <h4 class="title is-4">Graph: </h4>
      <!-- Graph -->
      <div id="cy"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Graph from "@/generators/graph";
// import * as CS from "cytoscape";
import cytoscape from "cytoscape";

@Component
export default class GraphBlock extends Vue {
  @Prop({ default: new Graph() })
  graph!: Graph;

  instance!: cytoscape.Core;

  mounted() {
    this.instance = cytoscape({
      container: document.getElementById('cy'),
      elements: this.graph.cytoscape(),
      layout: {
        name: 'breadthfirst',
        fit: true
      },
      zoom: 1,
      zoomingEnabled: false
    });
    console.log(this.instance);
  }
}
</script>

<style lang="scss">
#cy {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>