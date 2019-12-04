<template>
  <div class="chapter-workshop">
    <element-workshop :element.sync="chapter" @update:element="update()" />
    <string-list-workshop :list.sync="chapter.objectives" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Encounters</h2>
    <element-list :canEdit="true" :list.sync="chapter.encounters" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  ElementWorkshop,
  StringListWorkshop
} from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";
import { Chapter, Encounter } from "@/types";

@Component({
  name: "chapter-workshop",
  components: {
    ElementWorkshop,
    StringListWorkshop,
    ElementList
  }
})
export default class ChapterWorkshop extends Vue {
  @Prop()
  chapter!: Chapter;

  update() {
    this.$emit("update:chapter", this.chapter);
  }
}
</script>