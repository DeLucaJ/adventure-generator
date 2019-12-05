<template>
  <div class="adventure-workshop">
    <b-field label="Name" :label-position="labelpos">
      <b-input v-model="element.title" @input="update()" />
    </b-field>
    <hr />
    <h2 class="title is-2">The World: {{ world.title }}</h2>
    <!-- a way to link to the world -->
    <h2 class="title is-2">Chapters</h2>
    <element-list :canEdit="true" :list.sync="element.chapters" @update:list="update()" />
    <h2 class="title is-2">Events</h2>
    <element-list :canEdit="true" :list.sync="element.events" @update:list="update()" />>
    <h2 class="title is-2">Encounters</h2>
    <element-list :canEdit="true" :list.sync="element.encounters" @update:list="update()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Adventure } from "@/types";

@Component({
  name: "adventure-workshop"
})
export default class AdventureWorkshop extends Vue {
  @Prop()
  element!: Adventure;

  update() {
    this.$store.dispatch("updateAdventure", this.element);
  }
}
</script>