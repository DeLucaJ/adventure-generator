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
      elements: {
        nodes: [
          { data: { id: "n1" } },
          { data: { id: "n2" } },
          { data: { id: "n3" } },
          { data: { id: "n4" } },
          { data: { id: "n5" } },
        ],
        edges: [
          { data: { id: "e1", source: "n1", target: "n2" } },
          { data: { id: "e2", source: "n2", target: "n3" } },
          { data: { id: "e3", source: "n3", target: "n4" } },
          { data: { id: "e4", source: "n4", target: "n5" } },
        ],
      }
    });
  }
}
</script>

<style lang="scss">
#cy {
  width: 100%;
  height: 100%;
  min-height: 100px;
}
</style>