<template>
  <div class="plotpoint-block">
    <h4 class="title is-4">PlotPoint: {{ plotPoint.title }}</h4>
    <!-- Encounter -->
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PlotPoint } from "@/types";

@Component
export default class PlotPointBlock extends Vue {
  @Prop()
  plotPoint!: PlotPoint;
}
</script>