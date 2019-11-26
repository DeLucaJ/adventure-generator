<template>
  <div id="plot-point-editor">
    <header class="modal-card-head">

    </header>
    <p class="modal-card-body">

    </p>
    <footer class="modal-card-foot">

    </footer>
  </div>
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