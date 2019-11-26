<template>
  <div id="area-editor">
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
import { Area } from '@/types';

@Component
export default class AreaEditor extends Vue {
  @Prop()
  subject!: Area;
}
</script>

<style lang="scss">

</style>