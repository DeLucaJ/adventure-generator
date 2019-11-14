<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Quest } from "@/types";

@Component
export default class QuestBlock extends Vue {
  @Prop()
  quest: Quest = new Quest();
}
</script>