<template>
  <div class="element-block">
    <element-block :element="chapter" />
    <!-- Graph -->
    <h2 class="title is-2">Encounters</h2>
    <ul v-if="(chapter.encounters.length > 0)">
      <li v-for="enc in chapter.encounters" :key="enc.title">{{ enc.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import { Chapter } from "@/types";

@Component({
  name: "chapter-block",
  components: {
    ElementBlock
  }
})
export default class ChapterBlock extends Vue {
  @Prop()
  chapter!: Chapter;
}
</script>