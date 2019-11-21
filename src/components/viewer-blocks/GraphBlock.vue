<template>
  <section class="section">
    <div class="container">
      
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Graph from "@/generators/graph";

@Component
export default class GraphBlock extends Vue {
  @Prop({ default: new Graph() })
  graph!: Graph;

  mounted() {

  }
}
</script>

<style lang="scss">

</style>