<template>
  <div id="quest-block">
    <h4 class="title is-4">
      {{ quest.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h4>
    {{ quest.description }}
    <br />
    <h5 class="title is-5">Encounters</h5>
    <EncounterBlock v-for="enc in quest.encounters" :key="enc.title" :encounter="enc" />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Quest } from "@/types";
import { EncounterBlock } from "@/components/viewer-blocks";

@Component({ components: { EncounterBlock } })
export default class QuestBlock extends Vue {
  @Prop()
  quest!: Quest;
}
</script>