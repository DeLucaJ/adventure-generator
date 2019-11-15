<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Quest: {{ quest.title }}</h3>
      <!-- Graph
      Encounters -->
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