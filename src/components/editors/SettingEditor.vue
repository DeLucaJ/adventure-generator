<template>
  <div id="setting-editor">
    <header class="modal-card-head">
      Setting Editor
    </header>
    <div class="modal-card-body">

    </div>
    <footer class="modal-card-foot">

    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Setting } from '@/types';

@Component
export default class SettingEditor extends Vue {
  @Prop()
  subject!: Setting;
}
</script>

<style lang="scss">

</style>