<template>
  <div class="quest-editor">
    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Quest } from '@/types';

@Component
export default class QuestEditor extends Vue {
  @Prop()
  subject!: Quest;
}
</script>

<style lang="scss">

</style>