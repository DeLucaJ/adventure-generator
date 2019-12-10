<template>
  <div class="world-block">
    <element-block :element="element" />
    <hr />
    <h2 class="title">Areas</h2>
    <br />
    <element-list :list.sync="element.areas" />
    <hr />
    <h2 class="title">Factions</h2>
    <br />
    <element-list :list.sync="element.factions" />
    <hr />
    <h2 class="title">Characters</h2>
    <br />
    <element-list :list.sync="element.characters" />
    <hr />
    <h2 class="title">Extras</h2>
    <br />
    <element-list :list.sync="element.extras" />
    <hr />
    <h2 class="title">Items</h2>
    <br />
    <element-list :list.sync="element.items" />
    <hr />
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