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
  instance: cytoscape.Core = cytoscape(
    {
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
          { data: { id: "e1", source: "n2", target: "n3" } },
          { data: { id: "e1", source: "n3", target: "n4" } },
          { data: { id: "e1", source: "n4", target: "n5" } },
        ],
      },
      layout: {
        name: 'preset',
        positions: undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
        zoom: undefined, // the zoom level to set (prob want fit = false if set)
        pan: undefined, // the pan level to set (prob want fit = false if set)
        fit: true, // whether to fit to viewport
        padding: 30, // padding on fit
        animate: false, // whether to transition the node positions
        animationDuration: 500, // duration of animation in ms if enabled
        animationEasing: undefined, // easing of animation if enabled
        ready: undefined, // callback on layoutready
        stop: undefined, // callback on layoutstop
      },
      zoom: 1,
      pan: { x: 0, y: 0 },
      // interaction options:
      minZoom: 1e-50,
      maxZoom: 1e50,
      zoomingEnabled: true,
      userZoomingEnabled: true,
      panningEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: true,
      selectionType: 'single',
      touchTapThreshold: 8,
      desktopTapThreshold: 4,
      autolock: false,
      autoungrabify: false,
      autounselectify: false,
      // rendering options:
      headless: false,
      styleEnabled: true,
      hideEdgesOnViewport: false,
      textureOnViewport: false,
      motionBlur: false,
      motionBlurOpacity: 0.2,
      wheelSensitivity: 1,
      pixelRatio: 'auto'
    }
  );
}
</script>