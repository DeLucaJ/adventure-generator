<template>
  <div class="world-block">
    <element-block :element="element" />
    <h2 class="title">Areas</h2>
    <element-list :list.sync="element.areas"/>
    <h2 class="title">Factions</h2>
    <element-list :list.sync="element.factions"/>
    <h2 class="title">Characters</h2>
    <element-list :list.sync="element.characters"/>
    <h2 class="title">Extras</h2>
    <element-list :list.sync="element.extras"/>
    <h2 class="title">Items</h2>
    <element-list :list.sync="element.items"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";
import ElementList from "@/components/ElementList.vue";
import { ElementBlock } from "@/components/blocks";

@Component({
  name: "world-block",
  components: {
    ElementList,
    ElementBlock
  }
})
export default class WorldBlock extends Vue {
  @Prop()
  element!: World;
}
</script>