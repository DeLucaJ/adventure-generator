<template>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from "@/types";

@Component
export default class ItemBlock extends Vue {
  @Prop()
  item: Item = new Item();
}
</script>