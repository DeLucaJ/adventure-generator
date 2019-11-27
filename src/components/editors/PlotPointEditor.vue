<template>
  <div id="plot-point-editor">
    <header class="modal-card-head">
      Plot Point Editor
    </header>
    <div class="modal-card-body">

    </div>
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