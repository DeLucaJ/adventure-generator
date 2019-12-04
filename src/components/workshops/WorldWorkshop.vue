<template>
  <div class="world-workshop">
    <h1 class="title is-1">{{ world.title }}</h1><hr/>
    <h2 class="title is-2">Areas</h2>
    <!-- list of areas with links -->
    <h2 class="title is-2">Factions</h2>
    <!-- list of factions with links -->
    <h2 class="title is-2">Characters</h2>
    <!-- list of characters with links -->
    <h2 class="title is-2">Extras</h2>
    <!-- list of extras with links -->
    <h2 class="title is-2">Items</h2>
    <!-- list of items with links -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";

@Component({
  name: "world-workshop"
})
export default class WorldWorkshop extends Vue {
  @Prop()
  world!: World;
}
</script>