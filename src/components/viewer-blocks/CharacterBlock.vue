<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character } from "@/types";

@Component
export default class CharacterBlock extends Vue {
  @Prop()
  character: Character = new Character();
}
</script>