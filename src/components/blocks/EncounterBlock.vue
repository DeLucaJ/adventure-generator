<template>
  <div class="encounter-block">
    <element-block :element="element" />
    <h2 class="title">Area</h2>
    {{ element.area.title }}
    <h2 class="title">Cast</h2>
    <element-list :list.sync="element.cast" />
    <h2 class="title">Objectives</h2>
    <ul v-if="(element.objectives.length > 0)">
      <li v-for="obj in element.objectives" :key="obj">{{ obj }}</li>
    </ul>
    <h2 class="title">Events</h2>
    <ul v-if="(element.events.length > 0)">
      <li v-for="event in element.events" :key="event.condition">
        <span class="has-text-weight-bold">{{ event.condtion }}&nbsp;</span>
        <b-icon icon="arrow-right-bold" />
        <span class="is-italic">&nbsp;{{ event.event }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ElementBlock } from "@/components/blocks";
import ElementList from "@/components/ElementList.vue";
import { Encounter } from "@/types";

@Component({
  name: "encounter-block",
  components: {
    ElementBlock,
    ElementList
  }
})
export default class EncounterBlock extends Vue {
  @Prop()
  element!: Encounter;
}
</script>