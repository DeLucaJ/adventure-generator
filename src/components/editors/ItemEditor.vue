<template>
  <div id="item-editor">
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
import { Item } from '@/types';

@Component
export default class ItemEditor extends Vue {
  @Prop()
  subject!: Item;
}
</script>

<style lang="scss">

</style>