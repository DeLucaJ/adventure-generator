<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PlotPoint } from "@/types";

@Component
export default class PlotPointBlock extends Vue {
  @Prop()
  plotPoint: PlotPoint = new PlotPoint();
}
</script>