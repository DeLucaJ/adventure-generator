<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Narrative } from "@/types";

@Component
export default class NarrativeBlock extends Vue {
  @Prop()
  narrative: Narrative = new Narrative();
}
</script>