<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Item: {{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from "@/types";

@Component
export default class ItemBlock extends Vue {
  @Prop({ default: new Item() })
  item!: Item;
}
</script>