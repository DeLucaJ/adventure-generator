<template>
  <div class="adventure-block">
    <h1 class="title is-1">
      {{ adventure.title }}
      <b-button class='is-text' icon-left="pencil"></b-button>
    </h1>
    <NarrativeBlock v-bind:narrative="adventure.narrative" />
    <SettingBlock v-bind:setting="adventure.setting" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Adventure } from "@/types";
import { NarrativeBlock, SettingBlock } from "@/components/viewer-blocks";

@Component ({
  components: {
    NarrativeBlock,
    SettingBlock
  }
})
export default class AdventureBlock extends Vue {
  @Prop()
  adventure!: Adventure;
}
</script>