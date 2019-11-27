<template>
  <div id="plotpoint-block">
    <h4 class="title is-4">
      {{ plotPoint.title }}
      <b-button class="is-text" icon-left="pencil"></b-button>
    </h4>
    {{ plotPoint.description }}
    <br />
    <!-- Encounter -->
    <EncounterBlock :encounter="plotPoint.encounter"/>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PlotPoint } from "@/types";
import { EncounterBlock } from "@/components/viewer-blocks";

@Component({ components: { EncounterBlock } })
export default class PlotPointBlock extends Vue {
  @Prop()
  plotPoint!: PlotPoint;
}
</script>