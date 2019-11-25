<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Faction } from '@/types';

@Component
export default class FactionEditor extends Vue {
  @Prop()
  faction!: Faction;
}
</script>

<style lang="scss">

</style>