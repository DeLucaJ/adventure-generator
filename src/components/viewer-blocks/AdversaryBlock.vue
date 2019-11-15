<template>
  <section>
    <h3 class="title is-3">Adversary: {{ adversary.title }}</h3>
    <p>{{ adversary.description }}</p>
    <h4 class="title is-4">Characters</h4>
    <h4 class="title is-4">Factions</h4>
    <h4 class="title is-4">Portents</h4>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Adversary } from "@/types";

@Component
export default class AdversaryBlock extends Vue {
  @Prop({ default: new Adversary() })
  adversary!: Adversary;
}
</script>