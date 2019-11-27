<template>
  <div class="faction-block">
    <h3 class="title is-3">
      {{ faction.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h3>
    <p>{{ faction.description }}</p>
    <h4 class="title is-4">Members</h4>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Faction } from "@/types";

@Component
export default class FactionBlock extends Vue {
  @Prop()
  faction!: Faction;
}
</script>