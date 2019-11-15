<template>
  <section>
    <h3 class="title is-3">PlotPoint: {{ plotPoint.title }}</h3>
    <!-- Encounter -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PlotPoint } from "@/types";

@Component
export default class PlotPointBlock extends Vue {
  @Prop({ default: new PlotPoint() })
  plotPoint!: PlotPoint;
}
</script>