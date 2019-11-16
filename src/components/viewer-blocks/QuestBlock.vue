<template>
  <section class="section">
    <div class="container">
      <h4 class="title is-4">Quest: {{ quest.title }}</h4>
      {{ quest.description }}
      <h5 class="title is-5">Graph</h5>
      <!-- GraphBlocksHere -->
      <h5 class="title is-5">Encounters</h5>
      <EncounterBlock v-for="enc in quest.encounters" v-bind:key="enc.title" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Quest } from "@/types";


@Component
export default class QuestBlock extends Vue {
  @Prop({ default: new Quest() })
  quest!: Quest;
}
</script>