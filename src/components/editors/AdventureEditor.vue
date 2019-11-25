<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Adventure } from '@/types';

@Component ({})
export default class AdventureEditor extends Vue {
  @Prop()
  adventure!: Adventure;
}
</script>

<style lang="scss">

</style>