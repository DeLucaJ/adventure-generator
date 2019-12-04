<template>
  <div class="encounter-block">
    <element-block :element="encounter" />
    <h2 class="title is-2">Area</h2>
    {{ encounter.area.title }}
    <h2 class="title is-2">Cast</h2>
    <element-list :list.sync="encounter.cast" />
    <h2 class="title is-2">Objectives</h2>
    <ul v-if="(encounter.objectives.length > 0)">
      <li v-for="obj in encounter.objectives" :key="obj">{{ obj }}</li>
    </ul>
    <h2 class="title is-2">Events</h2>
    <ul v-if="(encounter.events.length > 0)">
      <li v-for="event in encounter.events" :key="event.condition">
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
  encounter!: Encounter;
}
</script>