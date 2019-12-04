<template>
  <div class="element-block">
    <element-block :element="chapter" />
    <!-- Graph -->
    <h2 class="title is-2">Objectives</h2>
    <ul>
      <li v-for="(objective, index) in chapter.objectives" :key="index">{{ objective }}</li>
    </ul>
    <h2 class="title is-2">Encounters</h2>
    <element-list :list.sync="chapter.encounters" :canEdit="false" :update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import ElementList from "@/components/ElementList.vue";
import { Chapter } from "@/types";

@Component({
  name: "chapter-block",
  components: {
    ElementBlock,
    ElementList
  }
})
export default class ChapterBlock extends Vue {
  @Prop()
  chapter!: Chapter;

  update() {
    this.$emit("update:chapter", this.chapter);
  }
}
</script>