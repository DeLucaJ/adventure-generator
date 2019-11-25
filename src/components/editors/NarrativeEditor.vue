<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Narrative } from '@/types';

@Component ({})
export default class NarrativeEditor extends Vue {
  @Prop()
  narrative!: Narrative;
}
</script>

<style lang="scss">

</style>