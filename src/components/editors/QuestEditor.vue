<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Quest } from '@/types';

@Component
export default class QuestEditor extends Vue {
  @Prop()
  quest!: Quest;
}
</script>

<style lang="scss">

</style>