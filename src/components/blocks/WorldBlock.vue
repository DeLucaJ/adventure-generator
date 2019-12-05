<template>
  <div class="world-block">
    <h1 class="title is-1">{{ element.title }}</h1><hr/>
    <h2 class="title is-2">Areas</h2>
    <element-list :list.sync="element.areas"/>
    <h2 class="title is-2">Factions</h2>
    <element-list :list.sync="element.factions"/>
    <h2 class="title is-2">Characters</h2>
    <element-list :list.sync="element.characters"/>
    <h2 class="title is-2">Extras</h2>
    <element-list :list.sync="element.extras"/>
    <h2 class="title is-2">Items</h2>
    <element-list :list.sync="element.items"/>
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
  element!: World;
}
</script>