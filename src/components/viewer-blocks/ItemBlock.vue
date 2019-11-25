<template>
  <div class="item-block">
    <h3 class="title is-3">Item: {{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from "@/types";

@Component
export default class ItemBlock extends Vue {
  @Prop()
  item!: Item;
}
</script>