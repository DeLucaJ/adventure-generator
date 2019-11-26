<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PlotPoint } from '@/types';

@Component
export default class PlotPointEditor extends Vue {
  @Prop()
  subject!: PlotPoint;
}
</script>

<style lang="scss">

</style>