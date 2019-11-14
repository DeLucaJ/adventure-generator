<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Encounter } from "@/types";

@Component
export default class EncounterBlock extends Vue {
  @Prop()
  encounter: Encounter = new Encounter();
}
</script>