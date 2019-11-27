<template>
  <div id="area-editor">
    <header class="modal-card-head">
      Area Editor
    </header>
    <div class="modal-card-body">

    </div>
    <footer class="modal-card-foot">

    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Area } from '@/types';

@Component
export default class AreaEditor extends Vue {
  @Prop()
  subject!: Area;
}
</script>

<style lang="scss">

</style>