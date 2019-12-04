<template>
  <div class="world-workshop">
    <b-field label="Name" :label-position="labelpos">
      <b-input v-model="world.title" @input="update()" />
    </b-field>
    <h2 class="title is-2">Areas</h2>
    <element-list :canEdit="true" :list.sync="world.areas" @update:list="update()" />
    <h2 class="title is-2">Factions</h2>
    <element-list :canEdit="true" :list.sync="world.factions" @update:list="update()" />
    <h2 class="title is-2">Characters</h2>
    <element-list :canEdit="true" :list.sync="world.characters" @update:list="update()" />
    <h2 class="title is-2">Extras</h2>
    <element-list :canEdit="true" :list.sync="world.extras" @update:list="update()" />
    <h2 class="title is-2">Items</h2>
    <element-list :canEdit="true" :list.sync="world.items" @update:list="update()" />
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

  update() {
    this.$store.dispatch("updateWorld", this.world);
  }
}
</script>