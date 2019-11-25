<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { AdventureElement } from '@/types';

@Component ({})
export default class ElementEditor extends Vue {
  @Prop()
  element!: AdventureElement;
}
</script>

<style lang="scss">

</style>