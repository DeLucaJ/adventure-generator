<template>
  
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