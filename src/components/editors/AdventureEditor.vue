<template>
  <div id="adventure-editor">
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
import { Adventure } from '@/types';

@Component
export default class AdventureEditor extends Vue {
  @Prop()
  subject!: Adventure;
}
</script>

<style lang="scss">

</style>