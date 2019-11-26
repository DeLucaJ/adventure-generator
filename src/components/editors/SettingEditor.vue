<template>
  <div id="setting-editor">
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
import { Setting } from '@/types';

@Component
export default class SettingEditor extends Vue {
  @Prop()
  subject!: Setting;
}
</script>

<style lang="scss">

</style>