<template>
  <section>
    <h2 class="title is-2">Narrative: {{ narrative.title }}</h2>
    <h3 class="title is-3">Graph</h3>
    <!-- Show these in order of graph -->
    <!-- Quests -->
    <!-- PlotPoints -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Narrative } from "@/types";

@Component
export default class NarrativeBlock extends Vue {
  @Prop({ default: new Narrative() })
  narrative!: Narrative;
}
</script>