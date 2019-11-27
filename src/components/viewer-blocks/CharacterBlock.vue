<template>
  <div class="character-block">
    <h3 class="title is-3">
      {{ character.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h3>
    <p>{{ character.description }}</p>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Character } from "@/types";

@Component
export default class CharacterBlock extends Vue {
  @Prop()
  character!: Character;
}
</script>