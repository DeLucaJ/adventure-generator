<template>
  <div class="world-block">
    <h1 class="title is-1">{{ world.title }}</h1><hr/>
    <h2 class="title is-2">Areas</h2>
    <element-list :list.sync="world.areas"/>
    <h2 class="title is-2">Factions</h2>
    <element-list :list.sync="world.factions"/>
    <h2 class="title is-2">Characters</h2>
    <element-list :list.sync="world.characters"/>
    <h2 class="title is-2">Extras</h2>
    <element-list :list.sync="world.extras"/>
    <h2 class="title is-2">Items</h2>
    <element-list :list.sync="world.items"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "world-block",
  components: {
    ElementList
  }
})
export default class WorldBlock extends Vue {
  @Prop()
  world!: World;
}
</script>