<template>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Item } from '@/types';

@Component ({})
export default class ItemEditor extends Vue {
  @Prop()
  item!: Item;
}
</script>

<style lang="scss">

</style>