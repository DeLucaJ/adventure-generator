<template>
  <div id="quest-editor">
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
import { Quest } from '@/types';

@Component
export default class QuestEditor extends Vue {
  @Prop()
  subject!: Quest;
}
</script>

<style lang="scss">

</style>