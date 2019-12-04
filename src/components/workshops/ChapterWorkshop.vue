<template>
  <div class="chapter-workshop">
    <element-workshop :element.sync="chapter" @update:element="update()" />
    <string-list-workshop :list.sync="chapter.objectives" @update:list="update()" />
    <!-- Encounters -->
    <!-- <element-list-workshop :list.sync="chapter.encounters" @update:list="update()" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  ElementWorkshop,
  StringListWorkshop,
  ElementListWorkshop
} from "@/components/workshops";
import { Chapter, Encounter } from "@/types";

@Component({
  name: "chapter-workshop",
  components: {
    ElementWorkshop,
    StringListWorkshop,
    ElementListWorkshop
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