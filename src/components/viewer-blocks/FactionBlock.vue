<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Faction: {{ faction.title }}</h3>
      <p>{{ faction.description }}</p>
      <h4 class="title is-4">Members</h4>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Faction } from "@/types";

@Component
export default class FactionBlock extends Vue {
  @Prop({ default: new Faction() })
  faction!: Faction;
}
</script>