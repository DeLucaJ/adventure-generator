<template>
  <div id="charater-editor">
    <header class="modal-card-head">
      Character Editor
    </header>
    <div class="modal-card-body">

    </div>
    <footer class="modal-card-foot">

    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Character } from '@/types';

@Component
export default class CharacterEditor extends Vue {
  @Prop()
  subject!: Character;
}
</script>

<style lang="scss">

</style>