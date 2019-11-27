<template>
  <div id="item-editor">
    <header class="modal-card-head">
      Item Editor
    </header>
    <div class="modal-card-body">

    </div>
    <footer class="modal-card-foot">

    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Item } from '@/types';

@Component
export default class ItemEditor extends Vue {
  @Prop()
  subject!: Item;
}
</script>

<style lang="scss">

</style>