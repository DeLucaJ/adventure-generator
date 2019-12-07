<template>
  <div class="world-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
    <h2 class="has-text-weight-semibold">Areas</h2>
    <element-list :canEdit="true" :list.sync="element.areas" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Factions</h2>
    <element-list :canEdit="true" :list.sync="element.factions" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Characters</h2>
    <element-list :canEdit="true" :list.sync="element.characters" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Extras</h2>
    <element-list :canEdit="true" :list.sync="element.extras" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Items</h2>
    <element-list :canEdit="true" :list.sync="element.items" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { World } from "@/types";
import { ElementWorkshop } from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "world-workshop",
  components: {
    ElementList,
    ElementWorkshop
  }
})
export default class WorldWorkshop extends Vue {
  @Prop()
  element!: World;

  update() {
    this.$store.dispatch("updateWorld", this.element);
  }
}
</script>