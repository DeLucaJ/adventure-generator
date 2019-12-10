<template>
  <div class="adventure-block">
    <element-block :element="element"/>
    <h2 class="title">The World: {{ element.world.title }}</h2>
    <!-- a way to link to the world -->
    <h2 class="title">Chapters</h2>
    <element-list :list.sync="element.chapters"/>
    <!-- <h2 class="title">Events</h2>
    <element-list :list.sync="element.plotevents"/>
    <h2 class="title">Encounters</h2>
    <element-list :list.sync="element.encounters"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure } from "@/types";
import { ElementBlock } from "@/components/blocks";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "adventure-block",
  components: {
    ElementBlock,
    ElementList
  }
})
export default class AdventureBlock extends Vue {
  @Prop()
  element!: Adventure;
}
</script>