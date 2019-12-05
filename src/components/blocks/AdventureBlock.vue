<template>
  <div class="adventure-block">
    <h1 class="title is-1">{{ element.title }}</h1><hr/>
    <h2 class="title is-2">The World: {{ element.world.title }}</h2>
    <!-- a way to link to the world -->
    <h2 class="title is-2">Chapters</h2>
    <element-list :list.sync="element.chapters"/>
    <h2 class="title is-2">Events</h2>
    <element-list :list.sync="element.plotevents"/>
    <h2 class="title is-2">Encounters</h2>
    <element-list :list.sync="element.encounters"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure } from "@/types";

@Component({
  name: "adventure-block"
})
export default class AdventureBlock extends Vue {
  @Prop()
  element!: Adventure;
}
</script>