<template>
  <div class="world-workshop">
    <b-field label="Name" :label-position="labelpos">
      <b-input v-model="element.title" @input="update()" />
    </b-field>
    <h2 class="title is-2">Areas</h2>
    <element-list :canEdit="true" :list.sync="element.areas" @update:list="update()" />
    <h2 class="title is-2">Factions</h2>
    <element-list :canEdit="true" :list.sync="element.factions" @update:list="update()" />
    <h2 class="title is-2">Characters</h2>
    <element-list :canEdit="true" :list.sync="element.characters" @update:list="update()" />
    <h2 class="title is-2">Extras</h2>
    <element-list :canEdit="true" :list.sync="element.extras" @update:list="update()" />
    <h2 class="title is-2">Items</h2>
    <element-list :canEdit="true" :list.sync="element.items" @update:list="update()" />
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
  element!: World;

  update() {
    this.$store.dispatch("updateWorld", this.element);
  }
}
</script>