<template>
  <section>
    <h3 class="title is-3">Faction: {{ faction.title }}</h3>
    <p>{{ faction.description }}</p>
    <h4 class="title is-4">Members</h4>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Faction } from "@/types";

@Component
export default class FactionBlock extends Vue {
  @Prop()
  faction: Faction = new Faction();
}
</script>