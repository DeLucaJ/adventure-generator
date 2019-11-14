<template>
  <section>
    <h3 class="title is-3">Quest: {{ quest.title }}</h3>
    <!-- Graph
    Encounters -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Quest } from "@/types";

@Component
export default class QuestBlock extends Vue {
  @Prop()
  quest: Quest = new Quest();
}
</script>