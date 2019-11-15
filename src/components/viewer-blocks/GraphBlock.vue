<template>
  <section>
    <h4 class="title is-4">Graph: {{ quest.title }}</h4>
    <!-- Graph -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Graph from "@/generators/graph";

@Component
export default class QuestBlock extends Vue {
  @Prop({ default: new Graph() })
  graph!: Graph;
}
</script>