<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Adversary } from "@/types";

@Component
export default class AdversaryBlock extends Vue {
  @Prop()
  adversary: Adversary = new Adversary();
}
</script>