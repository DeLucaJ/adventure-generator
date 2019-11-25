<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Area } from '@/types';

@Component
export default class AreaEditor extends Vue {
  @Prop()
  area!: Area;
}
</script>

<style lang="scss">

</style>