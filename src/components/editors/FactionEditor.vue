<template>
  <div id="faction-editor">
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
import { Faction } from '@/types';

@Component
export default class FactionEditor extends Vue {
  @Prop()
  subject!: Faction;
}
</script>

<style lang="scss">

</style>