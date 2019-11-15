<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Character: {{ character.title }}</h3>
      <p>{{ character.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character } from "@/types";

@Component
export default class CharacterBlock extends Vue {
  @Prop({ default: new Character() })
  character!: Character;
}
</script>