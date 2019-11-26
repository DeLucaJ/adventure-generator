<template>
  <div id="encounter-editor">
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
import { Encounter } from '@/types';

@Component
export default class EncounterEditor extends Vue {
  @Prop()
  subject!: Encounter;
}
</script>

<style lang="scss">

</style>