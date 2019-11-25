<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Adventure: {{ adventure.title }}</h1>
      <NarrativeBlock v-bind:narrative="adventure.narrative" />
      <SettingBlock v-bind:setting="adventure.setting" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Adventure } from "@/types";
import NarrativeBlock from "@/components/viewer-blocks/NarrativeBlock.vue";
import SettingBlock from "@/components/viewer-blocks/SettingBlock.vue";

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