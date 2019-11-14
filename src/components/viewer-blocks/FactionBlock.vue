<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Faction } from "@/types";

@Component
export default class FactionBlock extends Vue {
  @Prop()
  faction: Faction = new Faction();
}
</script>