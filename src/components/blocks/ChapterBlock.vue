<template>
  <div class="chapter-block">
    <element-block :element="element" />
    <hr />
    <!-- Graph -->
    <h2 class="title">Objectives</h2>
    <br />
    <dl>
      <li v-for="(objective, index) in element.objectives" :key="index">{{ objective }}</li>
    </dl>
    <hr />
    <h2 class="title">Encounters</h2>
    <br />
    <element-list :list.sync="element.encounters" :canEdit="false" :update:list="update()" />
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
  element!: Chapter;

  update() {
    this.$emit("update:chapter", this.element);
  }
}
</script>