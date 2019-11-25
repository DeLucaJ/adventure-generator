<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Encounter } from '@/types';

@Component ({})
export default class EncounterEditor extends Vue {
  @Prop()
  encounter!: Encounter;
}
</script>

<style lang="scss">

</style>