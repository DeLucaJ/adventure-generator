<template>
  <section>
    <h4 class="title is-4">Encounter: {{ encounter.title }}</h4>
    <p>{{ encounter.description }}</p>
    <h5 class="title is-5">Area</h5>
    <h5 class="title is-5">Character</h5>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Encounter } from "@/types";

@Component
export default class EncounterBlock extends Vue {
  @Prop()
  encounter: Encounter = new Encounter();
}
</script>