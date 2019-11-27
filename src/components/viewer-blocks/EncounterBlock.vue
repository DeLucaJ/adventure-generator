<template>
  <div class="encounter-block">
    <h4 class="title is-4">
      {{ encounter.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h4>
    <p>{{ encounter.description }}</p>
    <h5 class="title is-5">Area</h5>
    <h5 class="title is-5">Characters</h5>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Encounter } from "@/types";

@Component
export default class EncounterBlock extends Vue {
  @Prop()
  encounter!: Encounter;
}
</script>