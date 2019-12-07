<template>
  <div class="adventure-workshop">
    <element-workshop :element.sync="element" @update:element="update()"/>
    <h2 class="has-text-weight-semibold">The World</h2>
    {{ element.world.title }}
    <!-- a way to link to the world -->
    <h2 class="has-text-weight-semibold">Chapters</h2>
    <element-list :canEdit="true" :list.sync="element.chapters" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Events</h2>
    <element-list :canEdit="true" :list.sync="element.events" @update:list="update()" />
    <h2 class="has-text-weight-semibold">Encounters</h2>
    <element-list :canEdit="true" :list.sync="element.encounters" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure } from "@/types";
import { ElementWorkshop } from "@/components/workshops";
import ElementList from "@/components/ElementList.vue";

@Component({
  name: "adventure-workshop",
  components: {
    ElementList,
    ElementWorkshop
  }
})
export default class AdventureWorkshop extends Vue {
  @Prop()
  element!: Adventure;

  update() {
    this.$store.dispatch("updateAdventure", this.element);
  }
}
</script>