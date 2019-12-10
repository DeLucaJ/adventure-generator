<template>
  <div class="adventure-block">
    <element-block :element="element" />
    <hr />
    <h2 class="title">
      The World:
      <span class="is-info">{{ element.world.title }}</span>
    </h2>
    <!-- a way to link to the world -->
    <hr />
    <h2 class="title">Chapters</h2>
    <br />
    <element-list :list.sync="element.chapters" />
    <!-- <h2 class="title">Events</h2>
    <element-list :list.sync="element.plotevents"/>
    <h2 class="title">Encounters</h2>
    <element-list :list.sync="element.encounters"/>-->
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