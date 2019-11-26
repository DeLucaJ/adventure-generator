<template>
  <div id="charater-editor">
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
import { Character } from '@/types';

@Component
export default class CharacterEditor extends Vue {
  @Prop()
  subject!: Character;
}
</script>

<style lang="scss">

</style>