<template>
  <div class="adventure-block">
    <h1 class="title is-1">{{ world.title }}</h1><hr/>
    <h2 class="title is-2">The World: {{ world.title }}</h2>
    <!-- a way to link to the world -->
    <h2 class="title is-2">Chapters</h2>
    <!-- list of chapters with links -->
    <h2 class="title is-2">Events</h2>
    <!-- list of events with links -->
    <h2 class="title is-2">Encounters</h2>
    <!-- list of extras with links-->
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
  adventure!: Adventure;
}
</script>